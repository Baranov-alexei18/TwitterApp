import styled from 'styled-components';

import { THEME } from '@/constants/theme';
import { COLOR, SPACING } from '@/theme/variables';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${COLOR.lightGrey};
  padding: ${SPACING.zero} ${SPACING.xs};
`;
export const IconBack = styled.img<{theme: string}>`
  width: 20px;
  margin: ${SPACING.xs} ${SPACING.xs} ${SPACING.zero} ${SPACING.zero};
  filter: ${(props) => (props.theme === THEME.LIGHT ? 'none' : 'invert(100%)')};
`;
