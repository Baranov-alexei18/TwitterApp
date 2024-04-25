import React from 'react';
import { useSelector } from 'react-redux';

import { SearchBar } from '@/components/SearchBar';
import { Sidebar } from '@/components/Sidebar';
import { UserState } from '@/types/user';

import {
  Container, MainContent,
} from './style';

const HomePage = () => {
  const user = useSelector((state: UserState) => state.user);

  console.log(user);

  return (
    <Container>
      <Sidebar />
      <MainContent>
        ...Loading
      </MainContent>
      <SearchBar />
    </Container>
  );
};

export default HomePage;
