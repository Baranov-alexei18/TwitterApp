import styled, { keyframes } from 'styled-components';

import { BORDER_RADIUS, COLOR, SPACING } from '@/theme/variables';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  height: 24px;
  width: 24px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${COLOR.primary};
  border-radius: ${BORDER_RADIUS.circle};
  margin: ${SPACING.zero} auto;
  animation: ${spin} 1s linear infinite;
`;
