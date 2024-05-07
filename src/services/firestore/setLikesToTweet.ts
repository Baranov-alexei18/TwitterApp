import { doc, getDoc, updateDoc } from 'firebase/firestore';

import { FIRESTORE_COLLECTION, TYPE_LIKE } from '@/constants/firestore';
import { firestore } from '@/firebase/firebaseConfig';

export const setLikesToTweet = async (
  id: string,
  user_id: string,
  type: string,
) => {
  try {
    const updatedTweetRef = doc(firestore, FIRESTORE_COLLECTION.TWEETS, id);
    const data = await getDoc(updatedTweetRef);

    if (data.exists()) {
      const userData = data.data();

      if (type === TYPE_LIKE.ADD) {
        const isLiked = userData.likes.find((item: string) => item === user_id);
        if (isLiked !== undefined) return;

        await updateDoc(updatedTweetRef, {
          likes: [...userData.likes, user_id],
        });
      }

      if (type === TYPE_LIKE.DELETE) {
        await updateDoc(updatedTweetRef, {
          likes: userData.likes.filter((_id:string) => _id !== user_id),
        });
      }
    }
  } catch (error) {
    console.error('Ошибка при добавлении лайка к твиту:', error);
  }
};
