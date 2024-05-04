import { collection, doc, setDoc } from 'firebase/firestore';
import {
  getDownloadURL, ref, uploadBytes,
} from 'firebase/storage';

import { TweetToFirestoreType } from '@/components/ViewTweets/types';
import { FIRESTORE_COLLECTION } from '@/constants/firestore';
import { firestore, storage } from '@/firebase/firebaseConfig';

export const setTweetToFirestore = async (data:TweetToFirestoreType) => {
  try {
    const { photo, id, text } = data;
    let photoURL;

    if (photo) {
      const storageRef = ref(storage, `tweet_photos/${id}/${photo!.name}`);
      await uploadBytes(storageRef, photo);
      photoURL = await getDownloadURL(storageRef);
    }

    const tweetsCollectionRef = collection(firestore, FIRESTORE_COLLECTION.TWEETS);
    const newDocRef = doc(tweetsCollectionRef);

    await setDoc(newDocRef, {
      user_id: id,
      text,
      image: photoURL || null,
      date_created: new Date(),
      likes: [],
    });

    const updatedUserRef = doc(firestore, FIRESTORE_COLLECTION.USERS, id);
    const updatedTweetRef = doc(firestore, FIRESTORE_COLLECTION.TWEETS, newDocRef.id);

    await setDoc(updatedTweetRef, { tweet_id: newDocRef.id }, { merge: true });
    await setDoc(updatedUserRef, { tweets: [newDocRef.id, ...data.tweets!] }, { merge: true });

    return newDocRef.id;
  } catch (error) {
    console.error('Ошибка в firestore:', error);
  }
};
