import React, { useState } from 'react';

import { UserTypes } from '@/types/user';

import { SearchResults } from '../SearchResult';
import { ElasticSearch } from '../ui-components/ElasticSearch';
import { TweetType } from '../ViewTweets/types';

import { SearchBarWrapper } from './styles';

export const SearchBar = () => {
  const [dataRes, setDataRes] = useState<{ users: UserTypes[], tweets: TweetType[] } | null>(null);
  const [showResult, setShowResult] = useState(false);

  const getSearchData = (data: {users:UserTypes[], tweets: TweetType[], show: boolean}) => {
    setDataRes(data);
    setShowResult(data.show);
  };

  return (
    <SearchBarWrapper>
      <ElasticSearch onChange={getSearchData} />
      {dataRes && showResult && <SearchResults tweets={dataRes.tweets} users={dataRes.users} />}
    </SearchBarWrapper>
  );
};
