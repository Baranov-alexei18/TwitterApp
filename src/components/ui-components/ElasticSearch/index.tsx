import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Search from '@/assets/image/icons/search.svg';
import { TweetType } from '@/components/ViewTweets/types';
import { TIMEOUT_DEBOUNCE } from '@/constants';
import useDebounce from '@/hooks/useDebounce';
import { searchItemFirestore } from '@/services/firestore/searchItemFirestore';
import { RootState } from '@/store/store';
import { UserTypes } from '@/types/user';

import { Icon } from '../Icon';
import { Loader } from '../Loader';

import { Container, Input } from './styles';

export const ElasticSearch = ({ onChange }:
  { onChange: (data: { users: UserTypes[], tweets: TweetType[], show: boolean, }) => void }) => {
  const themes = useSelector((state: RootState) => state.theme.theme);
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const debouncedSearchTerm = useDebounce(searchQuery, TIMEOUT_DEBOUNCE);

  useEffect(() => {
    async function fetchData() {
      setShowResults(true);

      if (debouncedSearchTerm) {
        const results = await searchItemFirestore(debouncedSearchTerm as string);
        onChange({ ...results, show: true } as {users:UserTypes[], tweets:TweetType[], show:true});
      }
      setShowResults(false);
    }

    fetchData();
  }, [debouncedSearchTerm]);

  const handleChange = async (event: { target: { value: string; }; }) => {
    const { value } = event.target;

    setSearchQuery(value);

    if (!value.length) {
      onChange({ users: [], tweets: [], show: false });
    }
  };

  return (
    <Container theme={themes}>
      <Icon src={Search} alt="search" />
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
