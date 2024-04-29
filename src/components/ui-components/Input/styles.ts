import styled from 'styled-components';

import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/theme/variables';

export const StyledInput = styled.input<{error:boolean}>`
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: ${FONT_SIZE.md};
  border: 1px solid ${({ error }) => (error ? COLOR.error : COLOR.lightGrey)};
  border-radius: ${BORDER_RADIUS.xxs};
  padding: 10px;
  margin-bottom: 25px;
`;

export const WrapperInput = styled.div`
  position: relative;
`;

export const WrapperIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  cursor: pointer;
  border-radius: ${BORDER_RADIUS.xl};

  &:hover {
    transform: scale(1.05);
  }
`;

export const WrapperErrorMessage = styled.p`
  color: ${COLOR.error};
  font-size: ${FONT_SIZE.xs};
  margin: -20px 0 16px 0;

`;
