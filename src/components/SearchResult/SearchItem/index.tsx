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

import * as Styled from './styles';

export const SearchItem = memo(({ item }: { item: UserTypes | TweetType }) => {
  const navigate = useNavigate();

  if ('tweet_id' in item) {
    const tweet = item as TweetType;

    const handleToTweet = () => {
      navigate(`${PATH.HOME_PAGE}/tweet/${tweet.tweet_id}`);
    };

    return (
      <Styled.FormContainer onClick={handleToTweet}>
        <Styled.UserInfo>
          <Styled.Name>
            Date:
            {formatDate(formatTimestampToDate(tweet.date_created)!)}
          </Styled.Name>
          <Styled.TweetText>{item.text}</Styled.TweetText>
        </Styled.UserInfo>
      </Styled.FormContainer>
    );
  }

  return (
    <Styled.FormContainer>
      <Styled.UserIcon src={item.photoURL || DefaultIconUser} alt="Avatar" />
      <Styled.UserInfo>
        <Styled.Name>{item.name}</Styled.Name>
        <Styled.Email>{item.email}</Styled.Email>
      </Styled.UserInfo>
      <Button {...ButtonStyled4} fontSize={FONT_SIZE.xs} background={COLOR.dark}>Follow</Button>
    </Styled.FormContainer>
  );
});
