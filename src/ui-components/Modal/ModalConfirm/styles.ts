import styled from 'styled-components';

import { FONT_SIZE, SPACING } from '@/theme/variables';

export const WrapperButton = styled.div`
  display: flex;
  cursor: pointer;
  font-size: ${FONT_SIZE.md};
  gap: ${SPACING.xxxs};
  background-color: transparent;
  border: none;
  margin-top: ${SPACING.xs};
`;
