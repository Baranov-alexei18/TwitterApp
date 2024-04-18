import React from 'react';

import { StyledContent } from './style';
import { ContentProps } from './type';

export const ContentText: React.FC<ContentProps> = ({
  children, color, size, width,
}) => <StyledContent color={color} size={size} width={width}>{children}</StyledContent>;
