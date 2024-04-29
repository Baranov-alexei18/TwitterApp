import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DefaultIconUser from '@/assets/image/defaultUserImage.png';
import DotsIcon from '@/assets/image/icons/dots.svg';
import likeIcon from '@/assets/image/icons/like.svg';
import { deleteTweet } from '@/services/firestore/deleteTweet';
import { modalClose, modalOpen } from '@/store/sliceModal';
import { setUser } from '@/store/sliceUser';
import { COLOR } from '@/theme/variables';
import { UserState } from '@/types/user';
import { formatDate, formatTimestampToDate } from '@/utils/date';

import { Button } from '../ui-components/Button';
import { ButtonStyled4 } from '../ui-components/Button/config';
import { ModalBase } from '../ui-components/Modal/ModalBase';
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
  WrapperButton,
} from './styles';
import { TweetProps } from './types';

export const Tweet = memo(({ data, onHandleTweet }: TweetProps) => {
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

  const handleOpenModal = (tweet: TweetType) => {
    dispatch(modalOpen());
    onHandleTweet(tweet);
    setIsTooltipOpen(false);
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
        <TweetText>{`${text} ${tweet_id}`}</TweetText>
        {image && <TweetImage src={image} alt="Tweet" />}
        <TweetLikes>
          <img src={likeIcon} alt="Avatar" />
          <LikeCount>{likes}</LikeCount>
        </TweetLikes>
      </TweetUserInfo>
    </TweetContainer>
  );
});
