import styled from 'styled-components';

import { THEME } from '@/constants/theme';
import {
  BORDER_RADIUS,
  COLOR,
  FONT_SIZE,
  SPACING,
  Z_INDEX,
} from '@/theme/variables';

export const ModalOverlay = styled.div`
  position: fixed;
  top: ${SPACING.zero};
  left: ${SPACING.zero};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: ${Z_INDEX.xl};
`;

export const ModalContainer = styled.div<{ theme: string; }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  min-height: 50px;
  min-width: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${SPACING.xs};
  border-radius: ${BORDER_RADIUS.md};
  background-color: ${({ theme }) => (theme === THEME.LIGHT ? COLOR.light : COLOR.lightGrey)};
  color: ${({ theme }) => (theme === THEME.LIGHT ? COLOR.dark : COLOR.light)};
`;

export const CloseButton = styled.button`
  cursor: pointer;
  margin-left: auto;
  margin-bottom: ${SPACING.xxxs};
  border: none;
  font-size: ${FONT_SIZE.xl};
  background-color: transparent;
`;
