import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { firestore, storage } from '@/firebase/firebaseConfig';
import { UserTypes } from '@/types/user';

export const updateUser = async (
  userId: string,
  data: Partial<UserTypes & {gender: string}>,
  avatar: File,
) => {
  const userDocRef = doc(firestore, 'users', userId);
  const dataUser = await getDoc(userDocRef);

  let photoURL;

  if (avatar) {
    const storageRef = ref(storage, `tweet_icons/${avatar.name}`);
    await uploadBytes(storageRef, avatar);
    photoURL = await getDownloadURL(storageRef);
  }

  await updateDoc(userDocRef, {
    name: data.name?.trim(),
    description: data.description?.trim(),
    gender: data.gender || '',
    photoURL: photoURL || dataUser.data()!.photoURL,
  });
};
