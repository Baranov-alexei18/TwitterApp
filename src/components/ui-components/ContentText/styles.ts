import styled from 'styled-components';

import { COLOR, FONT_SIZE } from '@/theme/variables';

import { ContentProps } from './types';

export const StyledContent = styled.div<ContentProps>`
  color: ${(props) => props.color || COLOR.dark};
  font-size: ${(props) => props.size || FONT_SIZE.sm};
  width: ${(props) => props.width || 'auto'};
  margin-bottom: 16px;
`;
