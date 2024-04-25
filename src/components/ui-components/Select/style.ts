import styled from 'styled-components';

import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/theme/variables';

import { SelectProps } from './types';

export const StyledSelect = styled.select<Partial<SelectProps>>`
  display: flex;
  flex-grow: 1;
  height: 70px;
  padding: 8px;
  border: 1px solid ${(props) => props.borderColor || COLOR.lightGrey};
  color: ${(props) => props.color || COLOR.dark};
  background-color: ${(props) => props.backgroundColor || COLOR.light};
  font-size: ${(props) => props.size || FONT_SIZE.sm};
  border-radius: ${BORDER_RADIUS.xxs};
  cursor: pointer;
  outline: none;
`;
