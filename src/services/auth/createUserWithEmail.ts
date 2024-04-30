import { createUserWithEmailAndPassword } from 'firebase/auth';

import { LOCALSTORAGE_TOKEN } from '@/constants';
import { auth } from '@/firebase/firebaseConfig';
import { setUserToFirestore } from '@/services/firestore/setUserToFirestore';
import { UserTypes } from '@/types/user';

const createAccountWithEmail = async (data: UserTypes) => {
  const { email, password } = data;

  const { user } = await createUserWithEmailAndPassword(auth, email!, password!);

  await setUserToFirestore({ ...user, ...data } as UserTypes);

  return user;
};

export { createAccountWithEmail };
