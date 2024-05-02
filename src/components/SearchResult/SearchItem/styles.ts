import styled from 'styled-components';

import { COLOR } from '@/theme/variables';

export const FormContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
  transition: background 0.5s ease;

  &:hover{
    background: ${COLOR.lightGrey}
  }
`;

export const UserIcon = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 4px;
`;

export const UserInfo = styled.div`
  flex: 1;
  font-size: 12px;
`;
export const TweetText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 200px;
`;

export const Name = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Email = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; 
  width: 100px;
  margin-bottom: 5px;
`;
