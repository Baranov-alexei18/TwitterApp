import React, { FC } from 'react';

import { ConfigTitle } from './config';
import { StyledTitle } from './styles';
import { TitleProps } from './types';

export const Title: FC<TitleProps> = ({ row, children }) => (
  <StyledTitle {...ConfigTitle[row as unknown as keyof typeof ConfigTitle]}>
    {children}
  </StyledTitle>
);
