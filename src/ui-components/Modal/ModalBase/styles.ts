import styled from 'styled-components';

import { THEME } from '@/constants/theme';

export const ModalOverlay = styled.div`
  position: fixed;
  top: ${({ theme: { spacing } }) => spacing.zero};
  left: ${({ theme: { spacing } }) => spacing.zero};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: ${({ theme: { zIndex } }) => zIndex.xl};
`;

export const ModalContainer = styled.div<{ themeApp: string; }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  min-height: 50px;
  min-width: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${({ theme: { spacing } }) => spacing.xs};
  border-radius: ${({ theme: { radius } }) => radius.md};
  background-color: ${({ themeApp, theme: { colors } }) => (themeApp === THEME.LIGHT ? colors.light : colors.lightGrey)};
  color: ${({ themeApp, theme: { colors } }) => (themeApp === THEME.LIGHT ? colors.dark : colors.light)};
`;

export const CloseButton = styled.button`
  cursor: pointer;
  margin-left: auto;
  margin-bottom: ${({ theme: { spacing } }) => spacing.xxxs};
  border: none;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
  background-color: transparent;
`;
