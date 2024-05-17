import styled from 'styled-components';

import { THEME } from '@/constants/theme';
import { BORDER_RADIUS, COLOR, SPACING } from '@/theme/variables';

export const Container = styled.div<{theme: string}>`
  display: flex;
  align-items: center;
  height: 26px;
  padding: ${SPACING.xxs};
  border-radius: ${BORDER_RADIUS.xl};
  background-color: ${(props) => (props.theme === THEME.LIGHT ? COLOR.lightGrey1 : COLOR.darkGrey)};
  border: 1px solid ${(props) => (props.theme === THEME.LIGHT ? COLOR.lightGrey1 : COLOR.darkGrey)};
`;

export const Input = styled.input`
  flex: 1;
  width: 100%;
  background-color: inherit;
  border: none;
  outline: none;
  padding: ${SPACING.xxxs};
`;
