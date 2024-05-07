import { initializeTestEnvironment } from '@firebase/rules-unit-testing';
import { expect } from '@jest/globals';
import { doc, getDoc } from 'firebase/firestore';

import { FIRESTORE_COLLECTION } from '@/constants/firestore';
import { firestore, testEnvConfig } from '@/firebase/firebaseConfig';

import { setTweetToFirestore } from './setTweetToFirestore';

initializeTestEnvironment(testEnvConfig);

describe('setTweetToFirestore function', () => {
  test('should set tweet data to Firestore with null photo', async () => {
    const testData = {
      id: 'user1',
      text: 'Test tweet text from user1',
      tweets: ['tweet1', 'tweet2'],
    };

    const tweetId = await setTweetToFirestore(testData);

    const tweetDocRef = doc(firestore, FIRESTORE_COLLECTION.TWEETS, tweetId!);
    const tweetDocSnap = await getDoc(tweetDocRef);

    expect(tweetDocSnap.exists()).toBe(true);
    expect(tweetDocSnap.data()).toEqual({
      user_id: 'user1',
      text: 'Test tweet text from user1',
      tweet_id: tweetId,
      image: null,
      date_created: expect.any(Object),
      likes: [],
    });
  });
});
