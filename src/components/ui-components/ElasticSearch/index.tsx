import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Search from '@/assets/image/icons/search.svg';
import { TweetType } from '@/components/ViewTweets/types';
import { searchItemFirestore } from '@/services/firestore/searchItemFirestore';
import { RootState } from '@/store/store';
import { UserTypes } from '@/types/user';

import { Loader } from '../Loader';

import { Container, Input } from './styles';

export const ElasticSearch = ({ onChange }:
  { onChange: (data: { users: UserTypes[], tweets: TweetType[], show: boolean, }) => void }) => {
  const themes = useSelector((state: RootState) => state.theme.theme);
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleChange = async (event: { target: { value: string; }; }) => {
    const { value } = event.target;
    setSearchQuery(value);
    if (value.length === 0) {
      onChange({ users: [], tweets: [], show: false });
    }

    if (value.length >= 3) {
      setShowResults(true);
      const results = await searchItemFirestore(value);
      onChange({ ...results, show: true } as {users:UserTypes[], tweets: TweetType[], show: true});
      setShowResults(false);
    }
  };

  return (
    <Container theme={themes}>
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
