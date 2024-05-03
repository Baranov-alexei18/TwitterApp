import styled from 'styled-components';

import { BREAKPOINTS, COLOR } from '@/theme/variables';

export const Container = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
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
  width: 100%;
  max-width: 590px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    flex: 1;
    max-width: 100%;
  }
`;

export const SectionTab = styled.div`
  width: 100px;
  padding-left: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${COLOR.lightGrey}
`;
