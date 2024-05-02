import styled, { createGlobalStyle } from 'styled-components';

import { THEME } from '@/constants/theme';

import { COLOR } from './variables';

export const GlobalStyles = createGlobalStyle<{modal: boolean}>`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    overflow: ${(props) => props.modal && 'hidden'}
  }
`;

export const Container = styled.div<{theme: string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.theme === THEME.LIGHT ? COLOR.light : COLOR.dark)};
  color: ${(props) => (props.theme === THEME.LIGHT ? COLOR.dark : COLOR.light)};
`;

export const ThemeContainer = styled.div<{theme: string}>`
  background-color: ${(props) => (props.theme === THEME.LIGHT ? COLOR.light : COLOR.dark)};
  color: ${(props) => (props.theme === THEME.LIGHT ? COLOR.dark : COLOR.light)};
`;
