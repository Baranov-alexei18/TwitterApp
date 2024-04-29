import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{modal: boolean}>`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    overflow: ${(props) => props.modal && 'hidden'}
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
