import styled from 'styled-components';

import { BORDER_RADIUS, COLOR, SPACING } from '@/theme/variables';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  box-sizing: content-box;
  width: 100%;
  min-width: 400px;
  border-bottom: 1px solid ${COLOR.lightGrey};
`;

export const UserIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: ${BORDER_RADIUS.circle};
  margin: ${SPACING.sm} ${SPACING.zero} ${SPACING.zero} ${SPACING.xs};
`;
