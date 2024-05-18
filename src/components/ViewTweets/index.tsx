import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { TIMEOUT_DEBOUNCE } from '@/constants';
import { PATH } from '@/constants/routerLinks';
import { deleteTweet } from '@/services/firestore/deleteTweet';
import { modalClose, modalOpen } from '@/store/sliceModal';
import { setUser } from '@/store/sliceUser';
import { RootState } from '@/store/store';
import { TWEET_DELETE_MODAL } from '@/ui-components/Modal/options';

import { ModalConfirm } from '../../ui-components/Modal/ModalConfirm';
import { Tweet } from '../Tweet';

import { TweetType } from './types';

export const ViewTweets = ({ data }: { data: TweetType[] }) => {
  const { isOpen, modalType } = useSelector((state: RootState) => state.modal);
  const [activeTweetId, setActiveTweetId] = useState<TweetType | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tweetId } = useParams();

  const handleModalClose = () => {
    dispatch(modalClose());
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
    setActiveTweetId(null);
  };

  const handleTweet = (dataTweet: TweetType) => {
    dispatch(modalOpen({
      modalType: TWEET_DELETE_MODAL,
    }));
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
      {modalType === TWEET_DELETE_MODAL && (
        <ModalConfirm
          data-testid="modal-confirm"
          isOpen={isOpen}
          onConfirm={handleConfirmDelete}
          onCloseModal={handleModalClose}
        >
          Remove this tweet
        </ModalConfirm>
      )}
    </>

  );
};
