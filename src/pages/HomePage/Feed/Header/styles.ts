import styled from 'styled-components';

import { COLOR, SPACING } from '@/theme/variables';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${COLOR.lightGrey};
  padding: ${SPACING.zero} ${SPACING.xs};
`;
