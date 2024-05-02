import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { PATH } from '@/constants/routerLinks';
import { deleteTweet } from '@/services/firestore/deleteTweet';
import { modalClose } from '@/store/sliceModal';
import { setUser } from '@/store/sliceUser';
import { Container } from '@/theme/global';
import { UserState } from '@/types/user';

import { Tweet } from '../Tweet';
import { ModalConfirm } from '../ui-components/Modal/ModalConfirm';
import { Title } from '../ui-components/Title';

import { TweetType } from './types';

export const ViewTweets = ({ data }: { data: TweetType[] }) => {
  const [activeTweetId, setActiveTweetId] = useState<TweetType | null>(null);
  const userTweets = useSelector((state: UserState) => state.user.data);
  const [isModal, setIsModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tweetId } = useParams();

  const handleModalClose = () => {
    dispatch(modalClose());
    setIsModal(false);
  };

  const handleDeletePost = async (dataTweet:TweetType) => {
    const { user, tweet_id } = dataTweet;
    await deleteTweet(user, tweet_id);
    dispatch(setUser({
      ...user,
      tweets: user.tweets!.filter((tweetIds: string) => tweetIds !== tweet_id),
    }));
    if (tweetId) {
      navigate(PATH.HOME_PAGE);
    }
    dispatch(modalClose());
    setIsModal(false);
    setActiveTweetId(null);
  };

  const handleTweet = (dataTweet:TweetType) => {
    setIsModal(true);
    setActiveTweetId(dataTweet);
  };

  if (!data.length && !userTweets.tweets!.length) {
    return (
      <Container>
        <Title row="xs">No tweets</Title>
      </Container>
    );
  }
  return (
    <>
      {
        data.map((item: TweetType) => (
          <Tweet
            key={item.tweet_id}
            data={item}
            onHandleTweet={handleTweet}
          />
        ))
      }
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
