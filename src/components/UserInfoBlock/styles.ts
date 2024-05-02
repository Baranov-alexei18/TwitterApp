import styled from 'styled-components';

import { BORDER_RADIUS, SPACING } from '@/theme/variables';

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 280px;
  margin: ${SPACING.xxxxl} ${SPACING.zero} ${SPACING.md} ${SPACING.zero};
`;

export const UserIcon = styled.img`
  width: 45px;
  height: 45px;
  margin-right: ${SPACING.xxs};
  border-radius: ${BORDER_RADIUS.circle};
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
`;
