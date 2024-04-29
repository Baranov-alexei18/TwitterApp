import styled from 'styled-components';

import { BORDER_RADIUS, COLOR } from '@/theme/variables';

export const StyledToast = styled.div<{ type: 'success' | 'error'}>`
  position: fixed;
  top: 20px;
  right: 30px;
  transform: translate(-10%, -10%);
  padding: 10px 20px;
  background-color: ${({ type }) => (type === 'success' ? COLOR.success : COLOR.error)};
  color: white;
  z-index: 9999;
  border-radius: ${BORDER_RADIUS.xxs};
  transition: opacity 0.3s ease-in-out;
`;
