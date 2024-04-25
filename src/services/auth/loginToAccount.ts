import { Dispatch } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { UnknownAction } from 'redux';

import { LOCALSTORAGE_TOKEN } from '@/constants';
import { auth } from '@/firebase/firebaseConfig';
import { setUser } from '@/store/sliceUser';
import { UserTypes } from '@/types/user';

export const LoginToAccount = async (
  data: Partial<UserTypes>,
  dispatch: Dispatch<UnknownAction>,
) => {
  await signOut(auth);
  try {
    const { user } = await signInWithEmailAndPassword(auth, data.email!, data.password!);
    console.log('Авторизация пользователя');
    localStorage.setItem(LOCALSTORAGE_TOKEN, user.uid);
    dispatch(setUser({ ...user }));
    console.log('Пользователь есть в системе');
  } catch (error) {
    console.error('Ошибка при атворизации пользователя:', error);
  }
};
