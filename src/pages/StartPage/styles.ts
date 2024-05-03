import styled from 'styled-components';

import { BREAKPOINTS, SPACING } from '@/theme/variables';

export const ContainerWrapper = styled.div`
  display: flex;
  max-height: 93vh;
  
  @media (max-width: ${BREAKPOINTS.lg}px) {
    flex-direction: column;
  }
`;
export const Image = styled.img`
  width: 55%;

  @media (max-width: ${BREAKPOINTS.lg}px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  margin-top: ${SPACING.xxxxl};
  padding: ${SPACING.xxxxl} ${SPACING.xxl};

  @media (max-width: ${BREAKPOINTS.lg}px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: ${SPACING.zero} auto;
    padding: ${SPACING.xs};

    button {
      width: 100%;
    }
  }
`;
