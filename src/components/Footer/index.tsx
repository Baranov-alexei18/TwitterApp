import React from 'react';

import { START_PAGE } from '@/constants/pages/startPage';

import { StyledFooter } from './styles';

export const Footer = () => (
  <StyledFooter>
    {START_PAGE.FOOTER_MENU.map((value) => (
      <span key={value}>{value}</span>
    ))}
  </StyledFooter>
);
