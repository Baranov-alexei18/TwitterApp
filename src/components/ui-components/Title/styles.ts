import styled from 'styled-components';

import { SPACING } from '@/theme/variables';

import { TitleStyled } from './types';

export const StyledTitle = styled.p<TitleStyled>`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  margin: ${SPACING.md} ${SPACING.zero};
`;
