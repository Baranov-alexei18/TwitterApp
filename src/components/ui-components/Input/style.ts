import styled from 'styled-components';

import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/assets/style/variables';

export const StyledInput = styled.input<{error:string}>`
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: ${FONT_SIZE.md};
  border: 1px solid ${({ error }) => (error ? 'red' : COLOR.lightGrey)};
  border-radius: ${BORDER_RADIUS.xxs};
  padding: 10px;
  margin-bottom: 25px;
`;
