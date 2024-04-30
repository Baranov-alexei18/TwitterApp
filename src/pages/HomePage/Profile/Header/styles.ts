import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
`;

export const UserInfo = styled.div`
  position: relative;
  margin: 0 12px 0 12px;
`;
export const UserUpdate = styled.div`
  display: flex;
  justify-content: end;
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
  top: -60px;
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
