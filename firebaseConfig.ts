import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBr3llVJx2sXrF23Hsy8qwKqUXfdrwiF_w',
  authDomain: 'twitter-clone-53f45.firebaseapp.com',
  projectId: 'twitter-clone-53f45',
  storageBucket: 'twitter-clone-53f45.appspot.com',
  messagingSenderId: '490740436636',
  appId: '1:490740436636:web:6a6183e2de7e9d4b88e759',
  measurementId: 'G-W8BVQ2ECHT',
};

export const firebase = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebase);
export const auth = getAuth(firebase);
