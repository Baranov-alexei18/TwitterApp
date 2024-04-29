import {
  deleteDoc, doc, getDoc, updateDoc,
} from 'firebase/firestore';

import { firestore } from '@/firebase/firebaseConfig';

let isRequesting = false;

export const setLikesToTweet = async (id: string, user_id: string) => {
  try {
    if (isRequesting) {
      return;
    }

    isRequesting = true;

    const updatedTweetRef = doc(firestore, 'tweets', id);
    const data = await getDoc(updatedTweetRef);

    if (data.exists()) {
      const userData = data.data();
      const isLiked = userData.likes.find((item: string) => item === user_id);

      if (isLiked !== undefined) return;

      await updateDoc(updatedTweetRef, {
        likes: [...userData.likes, user_id],
      });
    }
  } catch (error) {
    console.error('Ошибка при добавлении лайка к твиту:', error);
  } finally {
    isRequesting = false;
  }
};

export const deleteLikesToTweet = async (id: string, user_id: string) => {
  try {
    if (isRequesting) {
      return;
    }

    isRequesting = true;

    const updatedTweetRef = doc(firestore, 'tweets', id);
    const data = await getDoc(updatedTweetRef);

    if (data.exists()) {
      const userData = data.data();
      const isLiked = userData.likes.find((item: string) => item === user_id);

      if (isLiked === undefined) return;

      await updateDoc(updatedTweetRef, {
        likes: userData.likes.filter((_id:string) => _id !== user_id),
      });
    }
  } catch (error) {
    console.error('Ошибка при добавлении лайка к твиту:', error);
  } finally {
    isRequesting = false;
  }
};
