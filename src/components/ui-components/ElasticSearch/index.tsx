import React, { useState } from 'react';

import Search from '@/assets/image/icons/search.svg';
import { TweetType } from '@/components/ViewTweets/types';
import { searchItemFirestore } from '@/services/firestore/searchItemFirestore';
import { UserTypes } from '@/types/user';

import { Loader } from '../Loader';

import { Container, Input } from './styles';

export const ElasticSearch = ({ onChange }:
  { onChange: (data: { users: UserTypes[], tweets: TweetType[] }) => void }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleChange = async (event: { target: { value: string; }; }) => {
    const { value } = event.target;
    setSearchQuery(value);

    if (value.length >= 3) {
      setShowResults(true);
      const results = await searchItemFirestore(value);
      onChange(results as {users:UserTypes[], tweets: TweetType[]});
      setShowResults(false);
    } else {
      setShowResults(false);
    }
  };

  return (
    <Container>
      <img src={Search} width="20px" alt="search-icon" title="search" />
      <Input
        type="text"
        placeholder="Search Twitter"
        value={searchQuery}
        onChange={handleChange}
      />
      {showResults && <Loader />}
    </Container>
  );
};
