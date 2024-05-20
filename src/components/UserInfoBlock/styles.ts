import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  align-item: center;
  max-width: 280px;
  margin: ${({ theme: { spacing } }) => `${spacing.xxxxl} ${spacing.zero} ${spacing.md} ${spacing.zero}`};

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.lg}px) {
    display: none;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme: { spacing } }) => spacing.xs};
`;
export const EllipsisWrapper = styled.div`
  width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.xl}px) {
    width: 100px;
  }
`;
