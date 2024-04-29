import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 280px;
  color: black;
  margin: 40px 0 20px 0;
`;

export const UserIcon = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 10px;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  margin-left: 12px;
`;
export const EllipsisWrapper = styled.div`
  width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
