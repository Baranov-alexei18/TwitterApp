import styled from 'styled-components';

import { BREAKPOINTS } from '@/theme/variables';

export const Container = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  max-width: 1200px;

  @media (max-width: ${BREAKPOINTS.xl}) {
    max-width: 1000px;
  }

  @media (max-width: ${BREAKPOINTS.lg}) {
    max-width: 900px;
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    max-width: 800px;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    max-width: 100%;
  }
`;

export const MainContent = styled.div`
  flex: 2.5;
  padding: 20px;
`;
