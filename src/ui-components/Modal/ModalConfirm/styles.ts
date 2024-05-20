import styled from 'styled-components';

export const WrapperButton = styled.div`
  display: flex;
  cursor: pointer;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  gap: ${({ theme: { spacing } }) => spacing.xxxs};
  background-color: transparent;
  border: none;
  margin-top: ${({ theme: { spacing } }) => spacing.xs};
`;
