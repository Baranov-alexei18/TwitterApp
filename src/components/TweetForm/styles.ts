import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  box-sizing: content-box;
  width: 100%;
  min-width: 400px;
  border-bottom: 1px solid #ccc;
`;

export const UserIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 16px 0 0 12px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
