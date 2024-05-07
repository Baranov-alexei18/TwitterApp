import { initializeTestEnvironment } from '@firebase/rules-unit-testing';
import { expect } from '@jest/globals';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { FIRESTORE_COLLECTION } from '@/constants/firestore';
import { firestore, testEnvConfig } from '@/firebase/firebaseConfig';

import { deleteTweet } from './deleteTweet';

initializeTestEnvironment(testEnvConfig);

describe('deleteTweet function', () => {
  beforeAll(async () => {
    await setDoc(doc(firestore, FIRESTORE_COLLECTION.TWEETS, 'tweet1'), { text: 'Test tweet 1', user_id: 'user1' });
    await setDoc(doc(firestore, FIRESTORE_COLLECTION.TWEETS, 'tweet2'), { text: 'Test tweet 2', user_id: 'user1' });
    await setDoc(doc(firestore, FIRESTORE_COLLECTION.USERS, 'user1'), { tweets: ['tweet1', 'tweet2'] });
  });

  test('should delete tweet from Firestore and update user tweets', async () => {
    const user = { uid: 'user1', tweets: ['tweet1', 'tweet2'] };
    const tweetId = 'tweet1';
    await deleteTweet(user, tweetId);

    const tweetDocRef = doc(firestore, FIRESTORE_COLLECTION.TWEETS, tweetId);
    const tweetDocSnap = await getDoc(tweetDocRef);
    expect(tweetDocSnap.exists()).toBe(false);

    const userDocRef = doc(firestore, FIRESTORE_COLLECTION.USERS, user.uid);
    const userDocSnap = await getDoc(userDocRef);
    const userData = userDocSnap.data();
    expect(userData?.tweets).not.toContain(tweetId);
  });
});
