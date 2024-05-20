import styled from 'styled-components';

import { THEME } from '@/constants/theme';

export const ResultsContainer = styled.div<{ themeApp: string }>`
  border-radius: ${({ theme: { radius } }) => radius.xxs};
  padding: ${({ theme: { spacing } }) => `${spacing.xxxs} ${spacing.xxs}`};
  margin-top: ${({ theme: { spacing } }) => spacing.xxs};
  color: ${({ theme: { colors } }) => colors.dark};
  background-color: ${({ themeApp, theme: { colors } }) => (themeApp === THEME.LIGHT ? colors.lightGrey1 : colors.darkGrey)};
`;

export const ResultGroup = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing.md};
`;

export const ResultHeader = styled.h3`
  margin: ${({ theme: { spacing } }) => `${spacing.xs} ${spacing.zero}`};
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.darkGrey};
`;

export const ResultItem = styled.div`
  padding: ${({ theme: { spacing } }) => `${spacing.xxxs} ${spacing.zero}`};
`;
