import styled from 'styled-components';

export const StyledLoginForm = styled.form`
  width: 450px;
  padding: 0 10px;
  box-sizing: border-box;
  margin: 60px auto;

  @media screen and (max-width: 576px) {
    width: calc(100% - 20px);
    text-align: center;
    padding: 10px;
  }
`;

export const WrapperLink = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
