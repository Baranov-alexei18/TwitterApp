import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { auth } from '@/firebase/firebaseConfig';
import { UserTypes } from '@/types/user';

export const LoginToAccount = async (data: UserTypes) => {
  await signOut(auth);
  try {
    const { user } = await signInWithEmailAndPassword(auth, data.email!, data.password!);
    console.log('Авторизация пользователя');
    console.log(user);
    console.log('Пользователь есть в системе');
  } catch (error) {
    console.error('Ошибка при атворизации пользователя:', error);
  }
};
