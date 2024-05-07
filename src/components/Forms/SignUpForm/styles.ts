import styled from 'styled-components';

import {
  BREAKPOINTS, COLOR, FONT_SIZE, SPACING,
} from '@/theme/variables';

export const StyledSignUpForm = styled.form`
  width: 700px;
  padding: ${SPACING.zero} ${SPACING.xs};
  box-sizing: border-box;
  margin: ${SPACING.xs} auto;

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

export const ContentDescription = styled.div`
  font-size: ${FONT_SIZE.sm};
  color: ${COLOR.darkGrey};
  margin-bottom: ${SPACING.sm};
`;
