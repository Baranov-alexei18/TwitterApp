import styled from 'styled-components';

import { TitleType } from './type';

export const StyledTitle = styled.p<TitleType>`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  margin: 20px 0;
`;
