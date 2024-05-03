import styled from 'styled-components';

import { BREAKPOINTS, SPACING } from '@/theme/variables';

export const StyledSignUpForm = styled.form`
  width: 700px;
  padding: ${SPACING.zero} ${SPACING.xs};
  box-sizing: border-box;
  margin: 60px auto;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    text-align: center;
    width: calc(100% - 20px);
    padding: ${SPACING.xs};
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex: 2;
  gap: ${SPACING.md};
  margin-bottom: ${SPACING.md};
  
`;

export const ImageDiv = styled.div`
  display: flex;
  justify-content:center;
`;
