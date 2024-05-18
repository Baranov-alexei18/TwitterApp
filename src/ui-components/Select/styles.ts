import styled from 'styled-components';

import {
  BORDER_RADIUS, COLOR, FONT_SIZE, SPACING,
} from '@/theme/variables';

import { SelectProps } from './types';

export const StyledSelect = styled.select<Partial<SelectProps>>`
  display: flex;
  flex-grow: 1;
  height: 70px;
  cursor: pointer;
  color: ${(props) => props.color || COLOR.dark};
  font-size: ${(props) => props.size || FONT_SIZE.sm};
  border-radius: ${BORDER_RADIUS.xxs};
  outline: none;
  background-color: ${(props) => props.backgroundColor || COLOR.light};
  padding: ${SPACING.xxs};
  border: 1px solid ${(props) => props.borderColor || COLOR.lightGrey};
`;
