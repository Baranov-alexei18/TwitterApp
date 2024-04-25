import React, { FC } from 'react';

import { StyledTitle } from './style';
import { TitleType } from './types';

export const Title: FC<TitleType> = ({ weight = 'normal', size = '16px', children }) => (
  <StyledTitle weight={weight} size={size}>
    {children}
  </StyledTitle>
);
