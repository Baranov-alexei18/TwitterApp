import styled from 'styled-components';

import { THEME } from '@/constants/theme';
import {
  BORDER_RADIUS,
  COLOR,
  FONT_SIZE,
  SPACING,
} from '@/theme/variables';

export const StyledInput = styled.input<{error:boolean, theme: string}>`
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  background-color: inherit;
  color: inherit;
  font-size: ${FONT_SIZE.md};
  border: 1px solid ${({ error, theme }) => (error ? COLOR.error : theme === THEME.LIGHT ? COLOR.lightGrey : COLOR.light)};
  border-radius: ${BORDER_RADIUS.xxs};
  padding: ${SPACING.xxs};
  margin-bottom: ${SPACING.lg};
`;

export const WrapperInput = styled.div`
  position: relative;
`;

export const WrapperIcon = styled.div`
  position: absolute;
  top: ${SPACING.md};
  right: ${SPACING.md};
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
  margin: -${SPACING.md} ${SPACING.zero} ${SPACING.sm} ${SPACING.zero};
`;
