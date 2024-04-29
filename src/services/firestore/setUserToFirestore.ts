import { doc, setDoc } from 'firebase/firestore';

import { firestore } from '@/firebase/firebaseConfig';
import { UserTypes } from '@/types/user';

export const setUserToFirestore = async (data: UserTypes) => {
  try {
    await setDoc(doc(firestore, 'users', data.uid!), {
      uid: data.uid,
      email: data.email?.trim(),
      description: '',
      name: data.name?.trim() || data.displayName?.trim(),
      phone: data.phone || null,
      date_birthday: data.date_created || null,
      date_created: new Date(),
      photoURL: data.photoURL || null,
      tweets: [],
    });
  } catch (error) {
    console.error('Ошибка в firestore:', error);
  }
};
