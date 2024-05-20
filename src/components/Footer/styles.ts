import styled from 'styled-components';

export const StyledFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme: { spacing } }) => spacing.xs};
  padding: ${({ theme: { spacing } }) => spacing.sm};
  margin-right: ${({ theme: { spacing } }) => spacing.xxxxl};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xxs};
  
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.lg}px) {
    display: none;
  }
`;
