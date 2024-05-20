import styled from 'styled-components';

import { SelectProps } from './types';

export const StyledSelect = styled.select<Partial<SelectProps>>`
  display: flex;
  flex-grow: 1;
  height: 70px;
  cursor: pointer;
  color: ${({ color, theme: { colors } }) => color || colors.dark};
  font-size: ${({ size, theme: { fontSizes } }) => size || fontSizes.sm};
  border-radius: ${({ theme: { radius } }) => radius.xxs};
  outline: none;
  background-color: ${({ backgroundColor, theme: { colors } }) => backgroundColor || colors.light};
  padding: ${({ theme: { spacing } }) => spacing.xxs};
  border: 1px solid ${({ borderColor, theme: { colors } }) => borderColor || colors.lightGrey};
`;
