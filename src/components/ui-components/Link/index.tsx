import React from 'react';

import { StyledLink } from './style';
import { LinkProps } from './type';

export const LinkApp: React.FC<LinkProps> = ({
  to, color, fontSize, marginLeft, children,
}) => (
  <StyledLink to={to} color={color} fontSize={fontSize} marginLeft={marginLeft}>
    {children}
  </StyledLink>
);
