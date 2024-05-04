import { deleteDoc, doc, updateDoc } from 'firebase/firestore';

import { FIRESTORE_COLLECTION } from '@/constants/firestore';
import { firestore } from '@/firebase/firebaseConfig';
import { UserTypes } from '@/types/user';

export const deleteTweet = async (user: UserTypes, id: string) => {
  try {
    await deleteDoc(doc(firestore, FIRESTORE_COLLECTION.TWEETS, id));

    await updateDoc(doc(firestore, FIRESTORE_COLLECTION.USERS, user.uid), {
      tweets: user.tweets!.filter((tweetId) => tweetId !== id),
    });
  } catch (error) {
    console.error(error);
  }
};
