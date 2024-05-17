import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router, Outlet,
} from 'react-router-dom';

import { SearchBar } from '@/components/SearchBar';
import { Sidebar } from '@/components/Sidebar';
import { UserState } from '@/types/user';

import { Container, MainContent } from './styles';

const HomePage = () => {
  const user = useSelector((state: UserState) => state.user);

  return (
    <Container data-testid="main-page">
      <Sidebar />
      <MainContent>
        <Outlet />
      </MainContent>
      <SearchBar />
    </Container>
  );
};

export default HomePage;
