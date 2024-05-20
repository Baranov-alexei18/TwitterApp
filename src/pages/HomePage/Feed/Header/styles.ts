import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.lightGrey};
  padding: ${({ theme: { spacing } }) => spacing.zero} ${({ theme: { spacing } }) => spacing.xs};

`;
