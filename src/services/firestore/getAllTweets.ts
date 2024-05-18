import {
  collection, doc, getDoc, getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  Timestamp,
} from 'firebase/firestore';

import { FIRESTORE_COLLECTION } from '@/constants/firestore';
import { firestore } from '@/firebase/firebaseConfig';

const TWEETS_LIMIT = 5;

export const getAllTweets = async (lastTweet: Timestamp|null = null) => {
  try {
    const tweetsCollectionRef = collection(firestore, FIRESTORE_COLLECTION.TWEETS);
    let tweetsQuery = query(tweetsCollectionRef, orderBy('date_created', 'desc'), limit(TWEETS_LIMIT));

    if (lastTweet) {
      tweetsQuery = query(tweetsCollectionRef, orderBy('date_created', 'desc'), startAfter(lastTweet), limit(TWEETS_LIMIT));
    }

    const tweetsQuerySnapshot = await getDocs(tweetsQuery);

    const tweets = [];

    for (const tweetDoc of tweetsQuerySnapshot.docs) {
      const tweetData = tweetDoc.data();
      const userDocRef = doc(firestore, FIRESTORE_COLLECTION.USERS, tweetData.user_id);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        tweets.push({ ...tweetData, user: userData });
      }
    }

    return tweets;
  } catch (error) {
    console.error('Ошибка при получении документов из Firestore:', error);
    return [];
  }
};
