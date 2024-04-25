import {
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { Dispatch, UnknownAction } from 'redux';

import { LOCALSTORAGE_TOKEN } from '@/constants';
import { auth } from '@/firebase/firebaseConfig';
import { setUser } from '@/store/sliceUser';
import { UserTypes } from '@/types/user';

import { setUserToFirestore } from '../firestore/setUserToFirestore';

export const createAccountWithGoogle = async (dispatch: Dispatch<UnknownAction>) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then(async (result) => {
      const { user } = result;
      localStorage.setItem(LOCALSTORAGE_TOKEN, user.uid);
      await setUserToFirestore({ ...user } as UserTypes);
      dispatch(setUser({ ...user }));
    }).catch((error) => {
      console.log(error);
      GoogleAuthProvider.credentialFromError(error);
    // ...
    });
};
