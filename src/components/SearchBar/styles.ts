import styled from 'styled-components';

import { BREAKPOINTS, COLOR, SPACING } from '@/theme/variables';

export const SearchBarWrapper = styled.div`
  box-sizing: content-box;
  flex: 1;
  width: 100%;
  height: 100vh;
  border-left: 1px solid ${COLOR.lightGrey};
  padding: ${SPACING.md};

  @media (max-width: ${BREAKPOINTS.lg}px) {
    display: none;
  }
`;
