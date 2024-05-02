import {
  collection, doc, getDoc, getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  Timestamp,
} from 'firebase/firestore';

import { firestore } from '@/firebase/firebaseConfig';

export const getAllTweets = async (lastTweet: Timestamp|null = null) => {
  try {
    const tweetsCollectionRef = collection(firestore, 'tweets');
    let tweetsQuery = query(tweetsCollectionRef, orderBy('date_created', 'desc'), limit(5));

    if (lastTweet) {
      tweetsQuery = query(tweetsCollectionRef, orderBy('date_created', 'desc'), startAfter(lastTweet), limit(5));
    }

    const tweetsQuerySnapshot = await getDocs(tweetsQuery);

    const tweets = [];

    for (const tweetDoc of tweetsQuerySnapshot.docs) {
      const tweetData = tweetDoc.data();
      const userDocRef = doc(firestore, 'users', tweetData.user_id);
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
