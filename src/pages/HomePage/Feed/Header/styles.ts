import styled from 'styled-components';

import { COLOR } from '@/theme/variables';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${COLOR.lightGrey};
  padding: 0 12px;
`;
export const IconBack = styled.img`
  width: 20px;
  margin: 12px 12px 0 0;
`;
