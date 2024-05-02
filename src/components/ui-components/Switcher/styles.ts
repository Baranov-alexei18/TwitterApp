import styled from 'styled-components';

import { THEME } from '@/constants/theme';
import { BORDER_RADIUS, COLOR } from '@/theme/variables';

export const SwitchWrapper = styled.div<{theme: string}>`
  position: relative;
  cursor: pointer;
  width: 55px;
  height: 30px;
  background-color: ${(props) => (props.theme === THEME.LIGHT ? COLOR.lightGrey : COLOR.dark)};
  border: 1px solid ${(props) => (props.theme === THEME.LIGHT ? COLOR.light : COLOR.light)};
  border-radius: ${BORDER_RADIUS.md};
`;

export const SwitchButton = styled.div<{theme: string}>`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.theme === THEME.LIGHT ? '3px' : '28px')};
  width: 24px; 
  height: 24px;
  transform: translateY(-50%);
  background-color: ${COLOR.light};
  border-radius: ${BORDER_RADIUS.circle};
  transition: left 0.3s ease-in-out;
`;
