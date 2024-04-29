import styled from 'styled-components';

import { COLOR } from '@/theme/variables';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${COLOR.lightGrey};
  padding: 0 12px;
`;

export const UserInfo = styled.div`
  position: relative;
  margin: 0 0 12px 12px;
`;

export const TitleHeader = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 4px;
`;

export const SubTitleHeader = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

export const Icon = styled.img`
  position: absolute;
  top: -70px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  font-size: 16px;
  color: #333;
  margin-bottom: 40px;
`;
