import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteTweet } from '@/services/firestore/deleteTweet';
import { modalClose } from '@/store/sliceModal';
import { setUser } from '@/store/sliceUser';
import { UserState } from '@/types/user';

import { Tweet } from '../Tweet';
import { Loader } from '../ui-components/Loader';
import { ModalConfirm } from '../ui-components/Modal/ModalConfirm';

import { TweetType } from './types';

export const ViewTweets = ({ data }: { data: TweetType[] }) => {
  const [activeTweetId, setActiveTweetId] = useState<TweetType | null>(null);
  const userNow = useSelector((state: UserState) => state.user.data);
  const isModal = useSelector((state: { modal: { isOpen: boolean } }) => state.modal.isOpen);
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(modalClose());
  };

  const handleDeletePost = (dataTweet:TweetType) => {
    const { user, tweet_id } = dataTweet;
    deleteTweet(user, tweet_id);
    dispatch(setUser({
      ...user,
      tweets: user.tweets!.filter((tweetId: string) => tweetId !== tweet_id),
    }));
    dispatch(modalClose());
    setActiveTweetId(null);
  };

  const handleTweet = (dataTweet:TweetType) => {
    setActiveTweetId(dataTweet);
  };

  return (
    <>
      {data.length === 0
        ? <Loader />
        : data.map((item: TweetType) => (
          <Tweet
            key={item.tweet_id}
            data={item}
            onHandleTweet={handleTweet}
          />
        ))}
      <ModalConfirm
        isOpen={isModal}
        onConfirm={() => handleDeletePost(activeTweetId!)}
        onCloseModal={handleModalClose}
      >
        Remove this tweet
      </ModalConfirm>
    </>

  );
};
