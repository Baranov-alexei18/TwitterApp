import React, { FC } from 'react';

import { ConfigTitle } from './config';
import { StyledTitle } from './styles';
import { TitleType } from './types';

export const Title: FC<TitleType> = ({ row, children }) => (
  <StyledTitle {...ConfigTitle[row]}>
    {children}
  </StyledTitle>
);
