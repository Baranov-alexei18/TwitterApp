import styled from 'styled-components';

import { BREAKPOINTS, FONT_SIZE, SPACING } from '@/theme/variables';

export const StyledFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${SPACING.xs};
  padding: ${SPACING.sm};
  margin-right: ${SPACING.xxxxl};
  font-size: ${FONT_SIZE.xxs};
  
  @media (max-width: ${BREAKPOINTS.lg}px) {
    display: none;
  }
`;
