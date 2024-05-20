import styled from 'styled-components';

import { THEME } from '@/constants/theme';

export const SwitchWrapper = styled.div<{themeApp: string}>`
  position: relative;
  cursor: pointer;
  width: 55px;
  height: 30px;
  background-color: ${({ themeApp, theme: { colors } }) => (themeApp === THEME.LIGHT ? colors.lightGrey : colors.dark)};
  border: 1px solid ${({ themeApp, theme: { colors } }) => (themeApp === THEME.LIGHT ? colors.light : colors.light)};
  border-radius: ${({ theme: { radius } }) => radius.md};
`;

export const SwitchButton = styled.div<{themeApp: string}>`
  position: absolute;
  top: 50%;
  left: ${({ themeApp }) => (themeApp === THEME.LIGHT ? '3px' : '28px')};
  width: 24px; 
  height: 24px;
  transform: translateY(-50%);
  background-color: ${({ theme: { colors } }) => colors.light};
  border-radius: ${({ theme: { radius } }) => radius.circle};
  transition: left 0.3s ease-in-out;
`;
