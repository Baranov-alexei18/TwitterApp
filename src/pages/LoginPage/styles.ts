import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  width: 450px;
  margin: 60px auto;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.sm}px) {
    text-align: center;
    width: calc(100% - ${({ theme: { spacing } }) => spacing.xxxs});
  }
`;

export const StyledLoginForm = styled.form`
  padding: ${({ theme: { spacing } }) => spacing.zero} ${({ theme: { spacing } }) => spacing.xs};
`;

export const WrapperLink = styled.div`
  display: flex;
  justify-content: flex-end;
`;
