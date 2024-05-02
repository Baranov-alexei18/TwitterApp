import styled from 'styled-components';

import { THEME } from '@/constants/theme';
import { BORDER_RADIUS, COLOR, SPACING } from '@/theme/variables';

export const ResultsContainer = styled.div<{ theme: string }>`
  border-radius: ${BORDER_RADIUS.xxs};
  padding: ${SPACING.xxxs} ${SPACING.xxs};
  margin-top: ${SPACING.xxs};
  color: ${COLOR.dark};
  background-color: ${(props) => (props.theme === THEME.LIGHT ? COLOR.lightGrey1 : COLOR.darkGrey)};
`;

export const ResultGroup = styled.div`
  margin-bottom: ${SPACING.md};
`;

export const ResultHeader = styled.h3`
  margin: ${SPACING.xs} ${SPACING.zero};
  border-bottom: 1px solid ${COLOR.darkGrey};
`;

export const ResultItem = styled.div`
  padding: ${SPACING.xxxs} ${SPACING.zero};
`;
