import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Dispatch, UnknownAction } from 'redux';

import { LOCALSTORAGE_TOKEN } from '@/constants';
import { auth } from '@/firebase/firebaseConfig';
import { setUserToFirestore } from '@/services/firestore/setUserToFirestore';
import { setUser } from '@/store/sliceUser';
import { UserTypes } from '@/types/user';

const createAccountWithEmail = async (data: UserTypes, dispatch: Dispatch<UnknownAction>) => {
  const {
    email, password,
  } = data;

  try {
    const { user } = await createUserWithEmailAndPassword(auth, email!, password!);

    await setUserToFirestore({ ...user, ...data } as UserTypes);
    console.log('Пользователь успешно зарегистрирован и данные сохранены в Firestore');

    localStorage.setItem(LOCALSTORAGE_TOKEN, user.uid);

    dispatch(setUser({ ...user, ...data }));
  } catch (error) {
    console.error('Ошибка при регистрации пользователя:', error);
  }
};

export { createAccountWithEmail };
