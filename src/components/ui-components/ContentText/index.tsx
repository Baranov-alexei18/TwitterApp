import React from 'react';

import { StyledContent } from './styles';
import { ContentProps } from './types';

export const ContentText: React.FC<ContentProps> = ({
  children, color, size, width,
}) => <StyledContent color={color} size={size} width={width}>{children}</StyledContent>;
