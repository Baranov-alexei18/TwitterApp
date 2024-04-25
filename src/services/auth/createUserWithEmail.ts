import { createUserWithEmailAndPassword } from 'firebase/auth';

import { LOCALSTORAGE_TOKEN } from '@/constants';
import { auth } from '@/firebase/firebaseConfig';
import { setUserToFirestore } from '@/services/firestore/setUserToFirestore';
import { UserTypes } from '@/types/user';

const createAccountWithEmail = async (data: UserTypes) => {
  const {
    email, password,
  } = data;

  const { user } = await createUserWithEmailAndPassword(auth, email!, password!);

  await setUserToFirestore({ ...user, ...data } as UserTypes);
  console.log('Пользователь успешно зарегистрирован и данные сохранены в Firestore');

  localStorage.setItem(LOCALSTORAGE_TOKEN, user.uid);

  return user;
};

export { createAccountWithEmail };
