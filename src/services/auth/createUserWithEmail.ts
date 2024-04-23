import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/firebase/firebaseConfig';
import { setUserToFirestore } from '@/services/firestore/setUserToFirestore';
import { setUser } from '@/store/sliceUser';
import { UserTypes } from '@/types/user';

export const createAccountWithEmail = async (data: UserTypes, dispatch: any) => {
  const {
    email, password,
  } = data;

  try {
    const { user } = await createUserWithEmailAndPassword(auth, email!, password!);
    console.log(user);

    await setUserToFirestore({ ...user, ...data });
    console.log('Пользователь успешно зарегистрирован и данные сохранены в Firestore');

    dispatch(setUser({ ...user, ...data }));
  } catch (error) {
    console.error('Ошибка при регистрации пользователя:', error);
  }
};
