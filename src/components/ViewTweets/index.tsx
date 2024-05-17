import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { TIMEOUT_DEBOUNCE } from '@/constants';
import { PATH } from '@/constants/routerLinks';
import { deleteTweet } from '@/services/firestore/deleteTweet';
import { modalClose } from '@/store/sliceModal';
import { setUser } from '@/store/sliceUser';

import { Tweet } from '../Tweet';
import { ModalConfirm } from '../ui-components/Modal/ModalConfirm';

import { TweetType } from './types';

export const ViewTweets = ({ data }: { data: TweetType[] }) => {
  const [activeTweetId, setActiveTweetId] = useState<TweetType | null>(null);
  const [isModal, setIsModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tweetId } = useParams();

  const handleModalClose = () => {
    dispatch(modalClose());
    setIsModal(false);
  };

  const handleDeletePost = async (dataTweet: TweetType) => {
    const { user, tweet_id } = dataTweet;

    await deleteTweet(user, tweet_id);

    if (tweetId) {
      navigate(PATH.HOME_PAGE);
    }

    setTimeout(() => {
      dispatch(setUser({
        ...user,
        tweets: user.tweets!.filter((tweetIds: string) => tweetIds !== tweet_id),
      }));
    }, TIMEOUT_DEBOUNCE);

    dispatch(modalClose());
    setIsModal(false);
    setActiveTweetId(null);
  };

  const handleTweet = (dataTweet: TweetType) => {
    setIsModal(true);
    setActiveTweetId(dataTweet);
  };

  const handleConfirmDelete = useCallback(() => {
    if (activeTweetId) {
      handleDeletePost(activeTweetId);
    }
  }, [activeTweetId, handleDeletePost]);

  return (
    <>
      {
        data.map((item: TweetType) => (
          item && (
            <Tweet
              data-testid="tweet"
              key={item.tweet_id}
              data={item}
              onHandleTweet={handleTweet}
            />
          )
        ))
      }
      <ModalConfirm
        data-testid="modal-confirm"
        isOpen={isModal}
        onConfirm={handleConfirmDelete}
        onCloseModal={handleModalClose}
      >
        Remove this tweet
      </ModalConfirm>
    </>

  );
};
