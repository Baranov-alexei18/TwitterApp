import styled from 'styled-components';

export const SignUpWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: ${({ theme: { spacing } }) => spacing.xxxxl} auto;
`;

export const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
`;
