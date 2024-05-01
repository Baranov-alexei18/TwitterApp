import React, { useState } from 'react';

import { UserTypes } from '@/types/user';

import { SearchResults } from '../SearchResult';
import { ElasticSearch } from '../ui-components/ElasticSearch';
import { Loader } from '../ui-components/Loader';
import { TweetType } from '../ViewTweets/types';

import { SearchBarWrapper } from './styles';

export const SearchBar = () => {
  const [dataRes, setDataRes] = useState<{ users: UserTypes[], tweets: TweetType[] } | null>(null);

  const getSearchData = (data: {users:UserTypes[], tweets: TweetType[]}) => {
    setDataRes(data);
  };

  return (
    <SearchBarWrapper>
      <ElasticSearch onChange={getSearchData} />
      {dataRes && <SearchResults tweets={dataRes.tweets} users={dataRes.users} />}
    </SearchBarWrapper>
  );
};
