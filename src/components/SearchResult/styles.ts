import styled from 'styled-components';

import { BORDER_RADIUS, COLOR } from '@/theme/variables';

export const ResultsContainer = styled.div`
  background-color: ${COLOR.lightGrey1};
  border-radius: ${BORDER_RADIUS.xxs};
  padding: 4px 8px;
  margin-top: 10px;
`;

export const ResultGroup = styled.div`
  margin-bottom: 20px;
`;

export const ResultHeader = styled.h3`
  margin: 12px 0;
  border-bottom: 1px solid ${COLOR.darkGrey};
`;

export const ResultItem = styled.div`
  padding: 5px 0;
`;
