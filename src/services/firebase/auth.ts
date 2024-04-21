import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore/lite';

import 'firebase/firestore';

import { auth, firestore } from '../../../firebaseConfig';

export const createAccount = async (data: object) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, data?.email, data.password);
    console.log(user);
    // await collection('users').doc(user.uid).set({
    //   email: data.email,
    //   name: data.name,
    // });
    console.log('Пользователь успешно зарегистрирован и данные сохранены в Firestore');
  } catch (error) {
    console.error('Ошибка при регистрации пользователя:', error);
  }
};

export const LoginToAccount = async (data: object) => {
  await signOut(auth);
  try {
    const { user } = await signInWithEmailAndPassword(auth, data.email, data.password);
    console.log('Авторизация пользователя');
    console.log(user);
    console.log('Пользователь есть в системе');
  } catch (error) {
    console.error('Ошибка при атворизации пользователя:', error);
  }
};
