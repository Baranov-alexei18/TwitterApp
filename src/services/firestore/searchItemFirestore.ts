import {
  collection, doc, getDoc, getDocs, query, where,
} from 'firebase/firestore';

import { TweetType } from '@/components/ViewTweets/types';
import { firestore } from '@/firebase/firebaseConfig';
import { UserTypes } from '@/types/user';

export const searchItemFirestore = async (queryUser: string) => {
  try {
    console.log('DEBOUNE');
    const tweetsRef = collection(firestore, 'tweets');
    const tweetsSnapshot = query(tweetsRef, where('text', '>=', queryUser), where('text', '<=', `${queryUser}\uf8ff`));
    const tweetResults = (await getDocs(tweetsSnapshot)).docs.map((docTweet) => docTweet.data());

    const usersRef = collection(firestore, 'users');
    const usersSnapshot = query(usersRef, where('name', '>=', queryUser), where('name', '<=', `${queryUser}\uf8ff`));
    const emailSnapshot = query(usersRef, where('email', '>=', queryUser), where('email', '<=', `${queryUser}\uf8ff`));
    const userResults = (await getDocs(usersSnapshot)).docs.map((docUser) => docUser.data());

    const emailResults = (await getDocs(emailSnapshot)).docs.map((docUser) => docUser.data());

    return { tweets: tweetResults, users: [...userResults, ...emailResults] };
  } catch (error) {
    console.error('Error fetching search results:', error);
    return { tweets: [], users: [] };
  }
};
