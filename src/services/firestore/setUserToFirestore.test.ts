import { initializeTestEnvironment } from '@firebase/rules-unit-testing';
import { expect } from '@jest/globals';
import { doc, getDoc, Timestamp } from 'firebase/firestore';

import { FIRESTORE_COLLECTION } from '@/constants/firestore';
import { firestore, testEnvConfig } from '@/firebase/firebaseConfig';

import { setUserToFirestore } from './setUserToFirestore';

initializeTestEnvironment(testEnvConfig);

describe('setUserToFirestore function', () => {
  test('should set user data to Firestore', async () => {
    const userData = {
      uid: 'userTest',
      email: 'test@example.com',
      name: 'Test User',
      phone: '1234567890',
      date_created: new Timestamp(100000, 12),
      photoURL: null,
    };

    await setUserToFirestore(userData);

    const userDocRef = doc(firestore, FIRESTORE_COLLECTION.USERS, 'userTest');
    const userDocSnap = await getDoc(userDocRef);

    expect(userDocSnap.exists()).toBe(true);
    expect(userDocSnap.data()).toEqual({
      uid: 'userTest',
      email: 'test@example.com',
      name: 'Test User',
      phone: '1234567890',
      date_birthday: {
        nanoseconds: 0,
        seconds: 100000,
      },
      date_created: expect.any(Object),
      description: '',
      photoURL: null,
      tweets: [],
    });
  });
});
