import styled from 'styled-components';

export const StyledSignUpForm = styled.form`
  width: 700px;
  padding: 0 10px;
  box-sizing: border-box;
  margin: 60px auto;

  @media screen and (max-width: 576px) {
    width: calc(100% - 20px);
    padding: 10px;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex: 2;
  gap: 20px;
  margin-bottom: 20px;
  
`;

export const ImageDiv = styled.div`
  display: flex;
  justify-content:center;
`;
