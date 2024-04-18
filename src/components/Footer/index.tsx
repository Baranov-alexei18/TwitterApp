import React from 'react';

import { START_PAGE } from '@/constants';

import { StyledFooter } from './style';

export const Footer = () => (
  <StyledFooter>
    {START_PAGE.FOOTER_MENU.map((value) => (
      <span key={value}>{value}</span>
    ))}
  </StyledFooter>
);
