import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import DefaultIconUser from '@/assets/image/defaultUserImage.png';
import { Button } from '@/components/ui-components/Button';
import { ButtonStyled4 } from '@/components/ui-components/Button/config';
import { TweetType } from '@/components/ViewTweets/types';
import { PATH } from '@/constants/routerLinks';
import { COLOR, FONT_SIZE } from '@/theme/variables';
import { UserTypes } from '@/types/user';
import { formatDate, formatTimestampToDate } from '@/utils/date';

import {
  Email, FormContainer, Name, TweetText, UserIcon, UserInfo,
} from './styles';

export const SearchItem = memo(({ item }: { item: UserTypes | TweetType }) => {
  const navigate = useNavigate();

  if ('tweet_id' in item) {
    const tweet = item as TweetType;

    const handleToTweet = () => {
      navigate(`${PATH.HOME_PAGE}/tweet/${tweet.tweet_id}`);
    };

    return (
      <FormContainer onClick={handleToTweet}>
        <UserInfo>
          <Name>
            Date:
            {formatDate(formatTimestampToDate(tweet.date_created)!)}
          </Name>
          <TweetText>{item.text}</TweetText>
        </UserInfo>
      </FormContainer>
    );
  }

  return (
    <FormContainer>
      <UserIcon src={item.photoURL || DefaultIconUser} alt="Avatar" />
      <UserInfo>
        <Name>{item.name}</Name>
        <Email>{item.email}</Email>
      </UserInfo>
      <Button {...ButtonStyled4} fontSize={FONT_SIZE.xs} background={COLOR.dark}>Follow</Button>
    </FormContainer>
  );
});
