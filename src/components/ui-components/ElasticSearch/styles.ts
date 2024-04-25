import styled from 'styled-components';

import { COLOR } from '@/theme/variables';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  max-height: 50px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  background-color: ${COLOR.lightGrey};
  border-radius: 30px;
`;

export const Input = styled.input`
  flex: 1;
  background-color: inherit;
  border: none;
  outline: none;
  padding: 4px;
`;
