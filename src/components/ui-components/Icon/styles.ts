import styled from 'styled-components';

import { THEME } from '@/constants/theme';

import { IconProps } from './types';

export const StyledIcon = styled.img<IconProps>`
  cursor: pointer;
  height: ${(props) => props.height || '20px'};
  width: ${(props) => props.width || '20px'};
  border-radius: ${(props) => props.radius || '0'};
  margin: ${(props) => props.margin || '0'};
  filter: ${(props) => (props.theme === THEME.DARK ? 'invert(100%)' : 'none')};
`;
