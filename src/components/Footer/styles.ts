import styled from 'styled-components';

import { FONT_SIZE, SPACING } from '@/theme/variables';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: ${SPACING.xs};
  padding: ${SPACING.sm};
  margin-right: ${SPACING.xxxxl};
  font-size: ${FONT_SIZE.xxs}
`;
