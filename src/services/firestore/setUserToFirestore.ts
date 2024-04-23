import { doc, setDoc } from 'firebase/firestore';

import { firestore } from '@/firebase/firebaseConfig';
import { UserTypes } from '@/types/user';

export const setUserToFirestore = async (data: Partial<UserTypes>) => {
  try {
    await setDoc(doc(firestore, 'users', data.uid!), {
      _uid: data.uid,
      name: data.name || data.displayName,
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
