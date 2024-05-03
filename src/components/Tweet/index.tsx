import React, { memo, MouseEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import DefaultIconUser from '@/assets/image/defaultUserImage.png';
import ActivelikeIcon from '@/assets/image/icons/active-like.svg';
import DotsIcon from '@/assets/image/icons/dots.svg';
import likeIcon from '@/assets/image/icons/like.svg';
import { PATH } from '@/constants/routerLinks';
import { deleteLikesToTweet, setLikesToTweet } from '@/services/firestore/setLikesToTweet';
import { modalOpen } from '@/store/sliceModal';
import { SPACING } from '@/theme/variables';
import { UserState } from '@/types/user';
import { formatDate, formatTimestampToDate } from '@/utils/date';

import { Icon } from '../ui-components/Icon';
import { StyledIcon24, StyledIcon40, StyledIconCircle40 } from '../ui-components/Icon/config';
import { TweetType } from '../ViewTweets/types';

import {
  HeaderTweets,
  LikeCount,
  ToolTip,
  ToolTipOption,
  TweetContainer,
  TweetDate,
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
  const [activeLike, setActiveLike] = useState(!!likes.find((item) => item === userNow.uid));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTooltipOpen = (e: unknown) => {
    (e as MouseEvent<HTMLImageElement>)!.stopPropagation();
    setIsTooltipOpen(!isTooltipOpen);
  };

  const handleOpenModal = (e: unknown, tweet: TweetType) => {
    (e as MouseEvent<HTMLImageElement>)!.stopPropagation();
    dispatch(modalOpen());
    onHandleTweet(tweet);
    setIsTooltipOpen(false);
  };

  const setLike = (e: unknown, id: string, userId: string) => {
    (e as MouseEvent<HTMLImageElement>)!.stopPropagation();
    if (!activeLike) {
      setLikesToTweet(id, userId);
      setCountLikes((prev) => prev + 1);
    } else {
      deleteLikesToTweet(id, userId);
      setCountLikes((prev) => prev - 1);
    }
    setActiveLike(!activeLike);
  };

  const handleToTweet = () => {
    navigate(`${PATH.HOME_PAGE}/tweet/${tweet_id}`);
  };

  return (
    <TweetContainer onClick={() => handleToTweet()}>
      <Icon
        src={user.photoURL || DefaultIconUser}
        alt="Avatar"
        {...StyledIconCircle40}
        margin={`${SPACING.xxxs} ${SPACING.zero} ${SPACING.zero} ${SPACING.xs}`}
      />
      <TweetUserInfo>
        <HeaderTweets>
          <UserNames>
            <UserName>{user.name}</UserName>
            <UserEmail>{user.email}</UserEmail>
            <TweetDate>{formatDate(formatTimestampToDate(data.date_created)!)}</TweetDate>
            {isTooltipOpen && (
            <ToolTip>
              <ToolTipOption onClick={
                  (e: MouseEvent<HTMLImageElement>) => handleOpenModal(e, data)
                }
              >
                Delete
              </ToolTipOption>
            </ToolTip>
            )}

          </UserNames>
          {user.uid === userNow.uid && (
            <Icon src={DotsIcon} alt="dots" onClick={handleTooltipOpen} />
          )}
        </HeaderTweets>
        <TweetText>{text}</TweetText>
        {image && <TweetImage src={image} alt="Tweet" />}
        <TweetLikes>
          <Icon
            src={activeLike ? ActivelikeIcon : likeIcon}
            alt="Like"
            {...StyledIcon24}
            margin={`${SPACING.zero} ${SPACING.xxxs} ${SPACING.zero} ${SPACING.zero}`}
            onClick={(e) => setLike(e, tweet_id, userNow.uid)}
          />
          <LikeCount active={activeLike.toString()}>{countLikes || false}</LikeCount>
        </TweetLikes>
      </TweetUserInfo>
    </TweetContainer>
  );
});
