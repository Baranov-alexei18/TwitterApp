import styled from 'styled-components';

import { THEME } from '@/constants/theme';
import { COLOR } from '@/theme/variables';

export const SwitchWrapper = styled.div<{theme: string}>`
  position: relative;
  width: 55px;
  height: 30px;
  background-color: ${(props) => (props.theme === THEME.LIGHT ? COLOR.lightGrey : COLOR.dark)};
  border-color: ${(props) => (props.theme === THEME.LIGHT ? COLOR.lightGrey : COLOR.light)};
  border-radius: 15px;
  cursor: pointer;
`;

export const SwitchButton = styled.div<{theme: string}>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
  transition: left 0.3s ease-in-out;
  left: ${(props) => (props.theme === THEME.LIGHT ? '3px' : '28px')};
`;
