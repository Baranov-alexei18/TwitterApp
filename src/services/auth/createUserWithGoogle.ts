import {
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { LOCALSTORAGE_TOKEN } from '@/constants';
import { auth } from '@/firebase/firebaseConfig';
import { UserTypes } from '@/types/user';

import { setUserToFirestore } from '../firestore/setUserToFirestore';

export const createAccountWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  const res = signInWithPopup(auth, provider)
    .then(async (result) => {
      const { user } = result;
      localStorage.setItem(LOCALSTORAGE_TOKEN, user.uid);
      await setUserToFirestore({ ...user } as UserTypes);
      return user;
    }).catch((error) => {
      GoogleAuthProvider.credentialFromError(error);
    });
  return res;
};
