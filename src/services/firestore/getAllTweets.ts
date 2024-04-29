import {
  collection, doc, getDoc, getDocs,
  orderBy,
  query,
} from 'firebase/firestore';

import { firestore } from '@/firebase/firebaseConfig';

export const getAllTweets = async () => {
  try {
    const tweetsCollectionRef = collection(firestore, 'tweets');
    const tweetsQuerySnapshot = await getDocs(query(tweetsCollectionRef, orderBy('date_created', 'desc')));

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
