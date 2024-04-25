import React from 'react';

import { StyledLink } from './style';
import { LinkProps } from './types';

export const LinkApp: React.FC<LinkProps> = ({
  to, color, fontSize, children,
}) => (
  <StyledLink to={to} color={color} fontSize={fontSize}>
    {children}
  </StyledLink>
);
