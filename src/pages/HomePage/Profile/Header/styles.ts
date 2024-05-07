import styled from 'styled-components';

import {
  BORDER_RADIUS, COLOR, FONT_SIZE, SPACING, WEIGHT,
} from '@/theme/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${COLOR.lightGrey};
`;

export const UserInfo = styled.div`
  position: relative;
  margin: ${SPACING.zero} ${SPACING.xs};
`;
export const UserUpdate = styled.div`
  display: flex;
  justify-content: end;
`;

export const TitleHeader = styled.div`
  font-size: ${FONT_SIZE.xl};
  font-weight: ${WEIGHT.lg};
  margin-top: ${SPACING.md};
  margin-bottom: ${SPACING.xxxs};
`;

export const SubTitleHeader = styled.div`
  font-size: ${FONT_SIZE.xs};
  color: ${COLOR.darkGrey};
  margin-bottom: ${SPACING.sm};
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: ${SPACING.md};
`;

export const Icon = styled.img`
  position: absolute;
  top: -60px;
  width: 100px;
  height: 100px;
  border-radius: ${BORDER_RADIUS.circle};
  margin-bottom: ${SPACING.xxs};
`;

export const Description = styled.div`
  font-size: ${FONT_SIZE.xs};
  color: ${COLOR.darkGrey};
  margin-bottom: ${SPACING.xxxxl};
`;
