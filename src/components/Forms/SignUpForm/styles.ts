import styled from 'styled-components';

export const StyledSignUpForm = styled.form`
  width: 700px;
  padding: ${({ theme: { spacing } }) => spacing.zero} ${({ theme: { spacing } }) => spacing.xs};
  box-sizing: border-box;
  margin: ${({ theme: { spacing } }) => spacing.xs} auto;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.sm}px) {
    text-align: center;
    width: calc(100% - 20px);
    padding: ${({ theme: { spacing } }) => spacing.xs};
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex: 2;
  gap: ${({ theme: { spacing } }) => spacing.md};
  margin-bottom: ${({ theme: { spacing } }) => spacing.md};
`;

export const ContentDescription = styled.div`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
  color: ${({ theme: { colors } }) => colors.darkGrey};
  margin-bottom: ${({ theme: { spacing } }) => spacing.sm};
`;
