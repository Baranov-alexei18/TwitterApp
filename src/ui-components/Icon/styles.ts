import styled from 'styled-components';

import { THEME } from '@/constants/theme';

import { IconProps } from './types';

export const StyledIcon = styled.img<IconProps>`
  cursor: pointer;
  height: ${({ height }) => height || '20px'};
  width: ${({ width }) => width || '20px'};
  border-radius: ${({ radius, theme: { spacing } }) => radius || spacing.zero};
  margin: ${({ margin, theme: { spacing } }) => margin || spacing.zero};
  filter: ${({ themeApp }) => (themeApp === THEME.DARK ? 'invert(100%)' : 'none')};
`;
