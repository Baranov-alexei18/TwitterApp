import styled from 'styled-components';

import { THEME } from '@/constants/theme';

export const StyledInput = styled.input<{error:boolean, themeApp: string}>`
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  background-color: inherit;
  color: inherit;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  border: 1px solid ${({ error, themeApp, theme: { colors } }) => (error ? colors.error : themeApp === THEME.LIGHT ? colors.lightGrey : colors.light)};
  border-radius: ${({ theme: { radius } }) => radius.xxs};
  padding: ${({ theme: { spacing } }) => spacing.xxs};
  margin-bottom: ${({ theme: { spacing } }) => spacing.lg};
`;

export const WrapperInput = styled.div`
  position: relative;
`;

export const WrapperIcon = styled.div`
  position: absolute;
  top: ${({ theme: { spacing } }) => spacing.md};
  right: ${({ theme: { spacing } }) => spacing.md};
  width: 30px;
  cursor: pointer;
  border-radius: ${({ theme: { radius } }) => radius.xl};

  &:hover {
    transform: scale(1.05);
  }
`;

export const WrapperErrorMessage = styled.p`
  color: ${({ theme: { colors } }) => colors.error};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
  margin: ${({ theme: { spacing } }) => `-${spacing.md} ${spacing.zero} ${spacing.sm} ${spacing.zero}`};
`;
