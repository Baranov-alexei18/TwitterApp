import { signInWithEmailAndPassword } from 'firebase/auth';

import { LOCALSTORAGE_TOKEN } from '@/constants';
import { auth } from '@/firebase/firebaseConfig';
import { UserTypes } from '@/types/user';

import { getUserDataFromFirestore } from '../firestore/getUserDataFromFirestore';

export const LoginToAccount = async (
  data: Partial<UserTypes>,
) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, data.email!, data.password!);
    const userData = await getUserDataFromFirestore(user.uid);

    localStorage.setItem(LOCALSTORAGE_TOKEN, user.uid);
    return userData;
  } catch (error) {
    console.error('Ошибка при атворизации пользователя:', error);
  }
};
