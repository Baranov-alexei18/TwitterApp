import styled from 'styled-components';

import { BORDER_RADIUS, BREAKPOINTS, SPACING } from '@/theme/variables';

export const InfoContainer = styled.div`
  display: flex;
  align-item: center;
  max-width: 280px;
  margin: ${SPACING.xxxxl} ${SPACING.zero} ${SPACING.md} ${SPACING.zero};

  @media (max-width: ${BREAKPOINTS.lg}px) {
    display: none;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${SPACING.xs};
`;
export const EllipsisWrapper = styled.div`
  width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: ${BREAKPOINTS.xl}px) {
    width: 100px;
  }

`;
