import styled from 'styled-components';

export const TextAreaWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: ${({ theme: { spacing } }) => spacing.sm};

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.md}px) {
    max-width: 95%;
  }
`;

export const TextAreaStyle = styled.textarea<{overlimit: boolean | undefined}>`
  position: relative;
  width: 100%;
  height: 70px;
  resize: none;
  color: inherit;
  background-color: inherit;
  border-radius: ${({ theme: { radius } }) => radius.xxs};
  border: ${({ overlimit, theme: { colors } }) => (!overlimit ? 'none' : `1px solid ${colors.error}`)};
  padding: ${({ theme: { spacing } }) => spacing.xxxs};
`;

export const ButtonsWrapper = styled.div`
  bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UploadButton = styled.input`
  display: none;
`;

export const ImageUploadButton = styled.label`
  color: ${({ theme: { colors } }) => colors.darkGrey};
  cursor: pointer;
  border: none;
  margin-left: ${({ theme: { spacing } }) => spacing.xxs};
`;

export const MaxLengthText = styled.div<{overlimit: boolean | undefined}>`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
  text-align: end;
  color: ${({ overlimit, theme: { colors } }) => (overlimit ? colors.error : 'inherit')};
  margin-bottom: ${({ theme: { spacing } }) => spacing.xxxs};
`;
