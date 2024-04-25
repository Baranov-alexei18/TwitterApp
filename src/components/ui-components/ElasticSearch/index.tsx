import React from 'react';

import Search from '@/assets/image/icons/search.svg';

import { Container, Input } from './style';

export const ElasticSearch = () => (
  <Container>
    <img src={Search} width="20px" alt="search-icon" title="search" />
    <Input type="text" placeholder="Search Twitter" />
  </Container>
);
