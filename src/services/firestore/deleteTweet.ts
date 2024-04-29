import { deleteDoc, doc, updateDoc } from 'firebase/firestore';

import { firestore } from '@/firebase/firebaseConfig';
import { UserTypes } from '@/types/user';

export const deleteTweet = async (user: UserTypes, id: string) => {
  try {
    await deleteDoc(doc(firestore, 'tweets', id));

    await updateDoc(doc(firestore, 'users', user.uid), {
      tweets: user.tweets!.filter((tweetId) => tweetId !== id),
    });
  } catch (error) {
    console.error(error);
  }
};
