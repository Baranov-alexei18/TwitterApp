import { initializeTestEnvironment } from '@firebase/rules-unit-testing';
import { expect } from '@jest/globals';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { FIRESTORE_COLLECTION } from '@/constants/firestore';
import { firestore, testEnvConfig } from '@/firebase/firebaseConfig';

import { setLikesToTweet } from './setLikesToTweet';

initializeTestEnvironment(testEnvConfig);

describe('setLikesToTweet function', () => {
  test('should add like to tweet', async () => {
    const tweetDocRef = doc(firestore, FIRESTORE_COLLECTION.TWEETS, 'tweet2');
    await setDoc(tweetDocRef, {
      text: 'Test tweet',
      likes: ['user1', 'user2'],
    });

    await setLikesToTweet('tweet2', 'user3', 'add');

    const updatedTweetDocSnap = await getDoc(tweetDocRef);
    expect(updatedTweetDocSnap.data()!.likes).toEqual(['user1', 'user2', 'user3']);
  });

  test('should delete like from tweet', async () => {
    const tweetDocRef = doc(firestore, FIRESTORE_COLLECTION.TWEETS, 'tweet1');
    await setDoc(tweetDocRef, {
      text: 'Test tweet',
      likes: ['user1', 'user2', 'user3'],
    });

    await setLikesToTweet('tweet1', 'user2', 'delete');

    const updatedTweetDocSnap = await getDoc(tweetDocRef);

    expect(updatedTweetDocSnap.data()!.likes).toEqual(['user1', 'user3']);
  });
});
