import { getApp, initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.VITE_API_KEY,
  authDomain: process.env.VITE_DOMAIN,
  projectId: process.env.VITE_PROJECT_ID,
  storageBucket: process.env.VITE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_APP_ID,
  measurementId: process.env.VITE_MEASUREMENT_ID,
};

const isDevelopment = import.meta.env.MODE === 'development';

export const firebase = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebase);
export const auth = getAuth(firebase);

const firebaseApp = getApp();
export const storage = getStorage(firebaseApp);

connectAuthEmulator(auth, 'http://127.0.0.1:9099');
connectFirestoreEmulator(firestore, '127.0.0.1', 8080);

export const testEnvConfig = {
  projectId: process.env.VITE_PROJECT_ID,
  emulators: {
    auth: connectAuthEmulator(auth, 'http://127.0.0.1:9099'),
    firestore: connectFirestoreEmulator(firestore, '127.0.0.1', 8080),
  },
};
