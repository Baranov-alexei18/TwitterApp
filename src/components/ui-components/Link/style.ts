import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import { COLOR } from '@/theme/variables';

import { LinkProps } from './types';

export const StyledLink = styled(RouterLink)<LinkProps>`
  text-decoration: none;
  color: ${(props) => props.color || COLOR.primary};
  font-size: ${(props) => props.fontSize || 'inherit'};
  
  &:hover {
    text-decoration: underline;
  }
`;
