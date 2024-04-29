import { collection, doc, setDoc } from 'firebase/firestore';
import {
  getDownloadURL, ref, uploadBytes,
} from 'firebase/storage';

import { firestore, storage } from '@/firebase/firebaseConfig';

export const setTweetToFirestore = async (data) => {
  try {
    let photoURL;

    if (data.photo) {
      const storageRef = ref(storage, `tweet_photos/${data.photo.name}`);
      await uploadBytes(storageRef, data.photo);
      photoURL = await getDownloadURL(storageRef);
    }

    const tweetsCollectionRef = collection(firestore, 'tweets');
    const newDocRef = doc(tweetsCollectionRef);

    await setDoc(newDocRef, {
      user_id: data.id,
      text: data.text,
      image: photoURL || null,
      date_created: new Date(),
      likes: [],
    });
    const { id } = newDocRef;
    const updatedTweetRef = doc(firestore, 'tweets', id);
    const updatedUserRef = doc(firestore, 'users', data.id);

    await setDoc(updatedTweetRef, { tweet_id: id }, { merge: true });

    await setDoc(updatedUserRef, { tweets: [id, ...data.tweets] }, { merge: true });

    return id;
  } catch (error) {
    console.error('Ошибка в firestore:', error);
  }
};
