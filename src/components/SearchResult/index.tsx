import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store/store';
import { UserTypes } from '@/types/user';

import { Title } from '../../ui-components/Title';
import { TweetType } from '../ViewTweets/types';

import { SearchItem } from './SearchItem';
import { ResultGroup, ResultHeader, ResultsContainer } from './styles';

export const SearchResults = ({ users, tweets }: { users: UserTypes[], tweets: TweetType[] }) => {
  const themes = useSelector((state: RootState) => state.theme.theme);

  if (tweets.length === 0 && users.length === 0) {
    return (
      <ResultsContainer themeApp={themes}>
        No result
      </ResultsContainer>
    );
  }
  return (
    <ResultsContainer themeApp={themes}>
      <Title row="xs">You might like </Title>
      <ResultGroup>
        {!!tweets.length && (
        <>
          <ResultHeader>Tweets</ResultHeader>
          {tweets.map((tweet) => (
            <SearchItem key={tweet.tweet_id} item={tweet} />
          ))}
        </>
        )}
      </ResultGroup>
      <ResultGroup>
        {!!users.length && (
        <>
          <ResultHeader>Users</ResultHeader>
          {users.map((user) => (
            <SearchItem key={user.uid} item={user} />
          ))}
        </>
        )}
      </ResultGroup>
    </ResultsContainer>
  );
};
