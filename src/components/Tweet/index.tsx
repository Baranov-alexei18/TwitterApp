import React, {
  memo, MouseEvent, useCallback, useEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import DefaultIconUser from '@/assets/image/defaultUserImage.png';
import ActivelikeIcon from '@/assets/image/icons/active-like.svg';
import DotsIcon from '@/assets/image/icons/dots.svg';
import likeIcon from '@/assets/image/icons/like.svg';
import { TIMEOUT_DEBOUNCE } from '@/constants';
import { TYPE_LIKE } from '@/constants/firestore';
import { PATH } from '@/constants/routerLinks';
import useDebounce from '@/hooks/useDebounce';
import { setLikesToTweet } from '@/services/firestore/setLikesToTweet';
import { SPACING } from '@/theme/variables';
import { UserState } from '@/types/user';
import { formatDate, formatTimestampToDate } from '@/utils/date';

import { Icon } from '../../ui-components/Icon';
import { StyledIcon24, StyledIconCircle40 } from '../../ui-components/Icon/config';
import { TweetType } from '../ViewTweets/types';

import * as Styled from './styles';
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
  const debouncedLike = useDebounce(activeLike, TIMEOUT_DEBOUNCE);

  useEffect(() => {
    async function setLikes() {
      if (debouncedLike) {
        setLikesToTweet(tweet_id, userNow.uid, TYPE_LIKE.ADD);
      } else {
        setLikesToTweet(tweet_id, userNow.uid, TYPE_LIKE.DELETE);
      }
    }

    setLikes();
  }, [debouncedLike]);

  const handleTooltipOpen = (e: unknown) => {
    (e as MouseEvent<HTMLImageElement>)!.stopPropagation();
    setIsTooltipOpen(!isTooltipOpen);
  };

  const handleOpenModal = (e: unknown, tweet: TweetType) => {
    (e as MouseEvent<HTMLImageElement>)!.stopPropagation();
    onHandleTweet(tweet);
    setIsTooltipOpen(false);
  };

  const setLike = useCallback((e: unknown) => {
    (e as MouseEvent<HTMLImageElement>)!.stopPropagation();

    if (activeLike) {
      setCountLikes((prev) => prev - 1);
    } else {
      setCountLikes((prev) => prev + 1);
    }

    setActiveLike((prev) => !prev);
  }, [activeLike]);

  const handleToTweet = useCallback(() => {
    navigate(`${PATH.HOME_PAGE}/tweet/${tweet_id}`);
  }, []);

  return (
    <Styled.TweetContainer onClick={handleToTweet}>
      <Icon
        src={user.photoURL || DefaultIconUser}
        alt="Avatar"
        {...StyledIconCircle40}
        margin={`${SPACING.xxxs} ${SPACING.zero} ${SPACING.zero} ${SPACING.xs}`}
      />
      <Styled.TweetUserInfo>
        <Styled.HeaderTweets>
          <Styled.UserNames>
            <Styled.UserName>{user.name}</Styled.UserName>
            <Styled.UserEmail>{user.email}</Styled.UserEmail>
            <Styled.TweetDate>
              {formatDate(formatTimestampToDate(data.date_created)!)}
            </Styled.TweetDate>
            {isTooltipOpen && (
            <Styled.ToolTip>
              <Styled.ToolTipOption onClick={
                  (e: MouseEvent<HTMLImageElement>) => handleOpenModal(e, data)
                }
              >
                Delete
              </Styled.ToolTipOption>
            </Styled.ToolTip>
            )}

          </Styled.UserNames>
          {user.uid === userNow.uid && (
            <Icon src={DotsIcon} alt="dots" onClick={handleTooltipOpen} />
          )}
        </Styled.HeaderTweets>
        <Styled.TweetText>{text}</Styled.TweetText>
        {image && <Styled.TweetImage src={image} alt="Tweet" />}
        <Styled.TweetLikes>
          <Icon
            src={activeLike ? ActivelikeIcon : likeIcon}
            alt="Like"
            {...StyledIcon24}
            margin={`${SPACING.zero} ${SPACING.xxxs} ${SPACING.zero} ${SPACING.zero}`}
            onClick={setLike}
          />
          <Styled.LikeCount active={activeLike.toString()}>{countLikes || ''}</Styled.LikeCount>
        </Styled.TweetLikes>
      </Styled.TweetUserInfo>
    </Styled.TweetContainer>
  );
});
