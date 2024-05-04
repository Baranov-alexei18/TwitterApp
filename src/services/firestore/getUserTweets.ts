import { doc, getDoc } from 'firebase/firestore';

import { TweetType } from '@/components/ViewTweets/types';
import { FIRESTORE_COLLECTION } from '@/constants/firestore';
import { firestore } from '@/firebase/firebaseConfig';
import { UserTypes } from '@/types/user';

export const getUserTweets = async (data: string[]) => {
  try {
    const tweets = await Promise.all(data.map(async (id) => {
      const tweetDocRef = doc(firestore, FIRESTORE_COLLECTION.TWEETS, id);
      const tweetDocSnap = await getDoc(tweetDocRef);

      if (tweetDocSnap.exists()) {
        const tweetData = tweetDocSnap.data() as TweetType;

        const userDocRef = doc(firestore, FIRESTORE_COLLECTION.USERS, tweetData.user_id);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data() as UserTypes;

          return { ...tweetData, user: userData };
        }

        return null;
      }
    }));

    return tweets.filter((tweet) => tweet !== null);
  } catch (error) {
    console.error('Ошибка при получении документов из Firestore:', error);
    return [];
  }
};
