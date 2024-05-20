import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  display: flex;
  max-height: 93vh;
  
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.lg}px) {
    flex-direction: column;
  }
`;
export const Image = styled.img`
  width: 55%;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.lg}px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing.xxxxl};
  padding: ${({ theme: { spacing } }) => spacing.xxxxl} ${({ theme: { spacing } }) => spacing.xxl};

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.lg}px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: ${({ theme: { spacing } }) => spacing.zero} auto;
    padding: ${({ theme: { spacing } }) => spacing.xs};

    button {
      width: 100%;
    }
  }
`;

export const ContentText = styled.div`
  width: 375px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
  margin-bottom: ${({ theme: { spacing } }) => spacing.sm};
`;

export const ContentLinks = styled.div`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
  margin-bottom: ${({ theme: { spacing } }) => spacing.sm};
`;
