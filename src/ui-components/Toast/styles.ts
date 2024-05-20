import styled from 'styled-components';

export const StyledToast = styled.div<{ type: 'success' | 'error'}>`
  position: fixed;
  top: 20px;
  right: 30px;
  transform: translate(-10%, -10%);
  padding: ${({ theme: { spacing } }) => `${spacing.xs} ${spacing.md}`};
  background-color: ${({ type, theme: { colors } }) => (type === 'success' ? colors.success : colors.error)};
  color: ${({ theme: { colors } }) => colors.light};
  z-index: ${({ theme: { zIndex } }) => zIndex.xxl};
  border-radius: ${({ theme: { radius } }) => radius.xxs};
  transition: opacity 0.3s ease-in-out;
`;
