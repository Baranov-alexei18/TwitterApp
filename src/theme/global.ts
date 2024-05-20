import styled, { createGlobalStyle } from 'styled-components';

import { THEME } from '@/constants/theme';

export const GlobalStyles = createGlobalStyle<{modal: boolean}>`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    overflow: ${({ modal }) => modal && 'hidden'}
  }
`;

export const Container = styled.div<{theme: string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  color: inherit;
`;

export const ThemeContainer = styled.div<{themeApp: string}>`
  background-color: ${({ themeApp, theme: { colors } }) => (themeApp === THEME.LIGHT ? colors.light : colors.dark)};
  color: ${({ themeApp, theme: { colors } }) => (themeApp === THEME.LIGHT ? colors.dark : colors.lightGrey)};
`;
