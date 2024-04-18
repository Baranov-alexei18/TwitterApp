import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import { COLOR } from '@/assets/style/variables';

import { LinkProps } from './type';

export const StyledLink = styled(RouterLink)<LinkProps>`
  text-decoration: none;
  color: ${(props) => props.color || COLOR.primary};
  font-size: ${(props) => props.fontSize || 'inherit'};
  margin-left: ${(props) => props.marginLeft || 'auto'};
  
  &:hover {
    text-decoration: underline;
  }
`;
