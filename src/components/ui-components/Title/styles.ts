import styled from 'styled-components';

import { TitleStyle } from './types';

export const StyledTitle = styled.p<TitleStyle>`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  margin: 20px 0;
`;
