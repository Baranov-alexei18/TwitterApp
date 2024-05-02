import styled from 'styled-components';

import { COLOR, SPACING } from '@/theme/variables';

export const SearchBarWrapper = styled.div`
  box-sizing: content-box;
  flex: 1;
  width: 100%;
  height: 100vh;
  border-left: 1px solid ${COLOR.lightGrey};
  padding: ${SPACING.xs} ${SPACING.md};
`;
