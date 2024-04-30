import styled from 'styled-components';

import { TitleStyled } from './types';

export const StyledTitle = styled.p<TitleStyled>`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  margin: 20px 0;
`;
