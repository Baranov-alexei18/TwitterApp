import {
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { auth } from '@/firebase/firebaseConfig';
import { setUser } from '@/store/sliceUser';

import { setUserToFirestore } from '../firestore/setUserToFirestore';

export const createAccountWithGoogle = async (dispatch:any) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then(async (result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log(token);
      const { user } = result;

      await setUserToFirestore({ ...user });
      dispatch(setUser({ ...user }));
      console.log(user);
    }).catch((error) => {
      console.log(error);
      GoogleAuthProvider.credentialFromError(error);
    // ...
    });
};
