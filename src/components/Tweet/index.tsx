import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DefaultIconUser from '@/assets/image/defaultUserImage.png';
import DotsIcon from '@/assets/image/icons/dots.svg';
import likeIcon from '@/assets/image/icons/like.svg';
import { deleteTweet } from '@/services/firestore/deleteTweet';
import { modalClose, modalOpen } from '@/store/sliceModal';
import { setUser } from '@/store/sliceUser';
import { UserState } from '@/types/user';
import { formatDate, formatTimestampToDate } from '@/utils/date';

import { ModalConfirm } from '../ui-components/Modal/ModalConfirm';
import { TweetType } from '../ViewTweets/types';

import {
  HeaderTweets,
  LikeCount,
  MoreOptionsIcon,
  ToolTip,
  ToolTipOption,
  TweetContainer,
  TweetDate,
  TweetIcon,
  TweetImage,
  TweetLikes,
  TweetText,
  TweetUserInfo,
  UserEmail,
  UserName,
  UserNames,
} from './styles';

export const Tweet = ({ data }: { data: TweetType }) => {
  const {
    user, text, image, likes, tweet_id,
  } = data;
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const userNow = useSelector((state: UserState) => state.user.data);
  const isModal = useSelector((state: { modal: { isOpen: boolean } }) => state.modal.isOpen);
  const dispatch = useDispatch();

  const handleTooltipOpen = () => {
    setIsTooltipOpen(!isTooltipOpen);
  };

  const handleOpenModal = () => {
    dispatch(modalOpen());
    setIsTooltipOpen(false);
  };

  const handleModalClose = () => {
    dispatch(modalClose());
  };

  const handleDeletePost = (id: string) => {
    // deleteTweet(user, tweet_id);
    console.log('tweets');
    console.log(id);
    console.log(user.tweets);
    console.log(user.tweets!.filter((tweetId) => tweetId !== id));
    // dispatch(setUser({ ...user, tweets: user.tweets!.filter((tweetId) => tweetId !== tweet_id) }));
    dispatch(modalClose());
  };

  const handleEditPost = () => {
  };

  return (
    <TweetContainer>
      <TweetIcon src={user.photoURL || DefaultIconUser} alt="Avatar" />
      <TweetUserInfo>
        <HeaderTweets>
          <UserNames>
            <UserName>{user.name}</UserName>
            <UserEmail>{user.email}</UserEmail>
            <TweetDate>{formatDate(formatTimestampToDate(data.date_created)!)}</TweetDate>
            {isTooltipOpen && (
            <ToolTip>
              <ToolTipOption onClick={() => handleOpenModal()}>Delete</ToolTipOption>
            </ToolTip>
            )}
            <ModalConfirm
              isOpen={isModal}
              onConfirm={() => handleDeletePost(tweet_id)}
              onCloseModal={handleModalClose}
            >
              Remove this tweet?
            </ModalConfirm>
          </UserNames>
          {user.uid === userNow.uid && (
            <MoreOptionsIcon src={DotsIcon} onClick={handleTooltipOpen} />
          )}
        </HeaderTweets>
        <TweetText>{`${text} ${tweet_id}`}</TweetText>
        {image && <TweetImage src={image} alt="Tweet" />}
        <TweetLikes>
          <img src={likeIcon} alt="Avatar" />
          <LikeCount>{likes}</LikeCount>
        </TweetLikes>
      </TweetUserInfo>
    </TweetContainer>
  );
};
