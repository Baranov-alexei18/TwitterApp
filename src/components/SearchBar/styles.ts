import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  box-sizing: content-box;
  flex: 1;
  width: 100%;
  max-width: 300px;
  height: 100vh;
  border-left: 1px solid ${({ theme: { colors } }) => colors.lightGrey};
  padding: ${({ theme: { spacing } }) => spacing.md};

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.md}px) {
    display: none;
  }
`;
