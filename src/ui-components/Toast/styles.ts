import styled from 'styled-components';

import {
  BORDER_RADIUS, COLOR, SPACING, Z_INDEX,
} from '@/theme/variables';

export const StyledToast = styled.div<{ type: 'success' | 'error'}>`
  position: fixed;
  top: 20px;
  right: 30px;
  transform: translate(-10%, -10%);
  padding: ${SPACING.xs} ${SPACING.md};
  background-color: ${({ type }) => (type === 'success' ? COLOR.success : COLOR.error)};
  color: ${COLOR.light};
  z-index: ${Z_INDEX.xxl};
  border-radius: ${BORDER_RADIUS.xxs};
  transition: opacity 0.3s ease-in-out;
`;
