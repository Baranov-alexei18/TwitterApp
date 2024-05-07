import { initializeTestEnvironment } from '@firebase/rules-unit-testing';
import { expect } from '@jest/globals';
import { connectAuthEmulator } from 'firebase/auth';
import { Timestamp } from 'firebase/firestore';

import { auth, PROJECT_ID, testEnvConfig } from '@/firebase/firebaseConfig';

import { createAccountWithEmail } from './createUserWithEmail';

initializeTestEnvironment(testEnvConfig);

afterAll(async () => {
  await auth.currentUser?.delete();

  await initializeTestEnvironment(testEnvConfig);
});

describe('createUserWithEmail function', () => {
  test('should create a new account with email and password', async () => {
    const userData = {
      uid: 'userTest',
      email: 'test2@example.com',
      password: 'test1234#',
      name: 'Test User',
      phone: '1234567890',
      date_created: new Timestamp(100000, 12),
      photoURL: null,
    };

    const user = await createAccountWithEmail(userData);

    expect(user).toBeDefined();
    expect(user.email).toBe(userData.email);
  });
});
