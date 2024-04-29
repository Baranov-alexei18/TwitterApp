import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DefaultIconUser from '@/assets/image/defaultUserImage.png';
import ActivelikeIcon from '@/assets/image/icons/active-like.svg';
import DotsIcon from '@/assets/image/icons/dots.svg';
import likeIcon from '@/assets/image/icons/like.svg';
import { deleteLikesToTweet, setLikesToTweet } from '@/services/firestore/setLikesToTweet';
import { modalOpen } from '@/store/sliceModal';
import { UserState } from '@/types/user';
import { formatDate, formatTimestampToDate } from '@/utils/date';

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
import { TweetProps } from './types';

export const Tweet = memo(({ data, onHandleTweet }: TweetProps) => {
  const {
    user, text, image, likes, tweet_id,
  } = data;
  const userNow = useSelector((state: UserState) => state.user.data);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [countLikes, setCountLikes] = useState(likes.length);
  const [activeLike, setActiveLike] = useState(() => !!likes.find((item) => item === userNow.uid));
  const dispatch = useDispatch();

  const handleTooltipOpen = () => {
    setIsTooltipOpen(!isTooltipOpen);
  };

  const handleOpenModal = (tweet: TweetType) => {
    dispatch(modalOpen());
    onHandleTweet(tweet);
    setIsTooltipOpen(false);
  };

  const setLike = (id: string, userId: string) => {
    if (!activeLike) {
      setLikesToTweet(id, userId);
      setCountLikes((prev) => prev + 1);
    } else {
      deleteLikesToTweet(id, userId);
      setCountLikes((prev) => prev - 1);
    }
    setActiveLike(!activeLike);
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
              <ToolTipOption onClick={() => handleOpenModal(data)}>Delete</ToolTipOption>
            </ToolTip>
            )}

          </UserNames>
          {user.uid === userNow.uid && (
            <MoreOptionsIcon src={DotsIcon} onClick={handleTooltipOpen} />
          )}
        </HeaderTweets>
        <TweetText>{text}</TweetText>
        {image && <TweetImage src={image} alt="Tweet" />}
        <TweetLikes>
          <img
            src={activeLike ? ActivelikeIcon : likeIcon}
            height="20px"
            alt="Like"
            onClick={() => setLike(tweet_id, userNow.uid)}
            aria-hidden
          />
          <LikeCount active={activeLike}>{countLikes || ''}</LikeCount>
        </TweetLikes>
      </TweetUserInfo>
    </TweetContainer>
  );
});
