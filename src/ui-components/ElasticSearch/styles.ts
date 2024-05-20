import styled from 'styled-components';

import { THEME } from '@/constants/theme';

export const Container = styled.div<{themeApp: string}>`
  display: flex;
  align-items: center;
  height: 26px;
  padding: ${({ theme: { spacing } }) => spacing.xxs};
  border-radius: ${({ theme: { radius } }) => radius.xl};
  background-color: ${({ themeApp, theme: { colors } }) => (themeApp === THEME.LIGHT ? colors.lightGrey1 : colors.darkGrey)};
  border: 1px solid ${({ themeApp, theme: { colors } }) => (themeApp === THEME.LIGHT ? colors.lightGrey1 : colors.darkGrey)};
`;

export const Input = styled.input`
  flex: 1;
  width: 100%;
  background-color: inherit;
  border: none;
  outline: none;
  padding: ${({ theme: { spacing } }) => spacing.xxxs};
`;
