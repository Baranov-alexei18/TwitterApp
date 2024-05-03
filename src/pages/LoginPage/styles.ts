import styled from 'styled-components';

import { BREAKPOINTS, SPACING } from '@/theme/variables';

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  width: 450px;
  margin: 60px auto;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    text-align: center;
    width: calc(100% - ${SPACING.xxxs});
  }
`;

export const StyledLoginForm = styled.form`
  padding: ${SPACING.zero} ${SPACING.xs};
`;

export const WrapperLink = styled.div`
  display: flex;
  justify-content: flex-end;
`;
