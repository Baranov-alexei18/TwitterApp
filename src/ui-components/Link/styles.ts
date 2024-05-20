import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import { LinkProps } from './types';

export const StyledLink = styled(RouterLink)<LinkProps>`
  text-decoration: none;
  color: ${({ color, theme: { colors } }) => color || colors.primary};
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  
  &:hover {
    text-decoration: underline;
  }
`;
