import styled from 'styled-components';

export const StyledLoginForm = styled.form`
  width: 450px;
  padding: 0 10px;
  box-sizing: border-box;
  margin: 60px auto;

  @media screen and (max-width: 576px) {
    width: calc(100% - 20px);
    padding: 10px;
  }
`;
