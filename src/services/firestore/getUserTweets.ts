import { doc, getDoc } from 'firebase/firestore';

import { firestore } from '@/firebase/firebaseConfig';

export const getUserTweets = async (data: string[]) => {
  try {
    const tweets = await Promise.all(data.map(async (id) => {
      const tweetDocRef = doc(firestore, 'tweets', id);
      const tweetDocSnap = await getDoc(tweetDocRef);

      if (tweetDocSnap.exists()) {
        const tweetData = tweetDocSnap.data();

        const userDocRef = doc(firestore, 'users', tweetData.user_id);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();

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
