import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 450px;
  margin: 60px auto;
`;

export const StyledLoginForm = styled.form`
  padding: 0 10px;
  box-sizing: border-box;

  @media screen and (max-width: 576px) {
    width: calc(100% - 20px);
    text-align: center;
    padding: 10px;
  }
`;

export const WrapperLink = styled.div`
  display: flex;
  justify-content: flex-end;
`;
