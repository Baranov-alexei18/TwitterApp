import { Timestamp } from 'firebase/firestore';

import { UserTypes } from '@/types/user';

export type TweetType = {
  date_created: Timestamp,
  image: string,
  likes: string[],
  text: string,
  tweet_id: string,
  user_id: string,
  user: UserTypes,
};

export type TweetToFirestoreType = {
  id: string,
  text: string,
  photo?: File,
  tweets?: string[],
};
