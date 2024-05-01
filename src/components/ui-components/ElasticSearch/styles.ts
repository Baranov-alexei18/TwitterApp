import styled from 'styled-components';

import { COLOR } from '@/theme/variables';

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 400px;
  height: 26px;
  border: 1px solid ${COLOR.lightGrey};
  border-radius: 4px;
  padding: 8px;
  background-color: ${COLOR.lightGrey1};
  border-radius: 30px;
`;

export const Input = styled.input`
  flex: 1;
  background-color: inherit;
  border: none;
  outline: none;
  padding: 4px;
`;
