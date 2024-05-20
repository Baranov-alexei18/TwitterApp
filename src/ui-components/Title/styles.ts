import styled from 'styled-components';

import { TitleStyled } from './types';

export const StyledTitle = styled.p<TitleStyled>`
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size};
  margin: ${({ theme: { spacing } }) => `${spacing.md} ${spacing.zero}`};
`;
