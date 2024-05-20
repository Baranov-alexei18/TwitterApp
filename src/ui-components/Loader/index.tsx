import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  height: 24px;
  width: 24px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${({ theme: { colors } }) => colors.primary};
  border-radius: ${({ theme: { radius } }) => radius.circle};
  margin: ${({ theme: { spacing } }) => spacing.zero} auto;
  animation: ${spin} 1s linear infinite;
`;
