import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  box-sizing: content-box;
  width: 100%;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.lightGrey};
`;
