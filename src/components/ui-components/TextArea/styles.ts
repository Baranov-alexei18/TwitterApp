import styled from 'styled-components';

import {
  BORDER_RADIUS, COLOR, FONT_SIZE, SPACING,
} from '@/theme/variables';

export const TextAreaWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: ${SPACING.sm};
`;

export const TextAreaStyle = styled.textarea<{overlimit: boolean | undefined}>`
  position: relative;
  width: 100%;
  height: 70px;
  resize: none;
  color: inherit;
  background-color: inherit;
  border-radius: ${BORDER_RADIUS.xxs};
  border: ${(props) => (!props.overlimit ? 'none' : `1px solid ${COLOR.error}`)};
  padding: ${SPACING.xxxs};
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UploadButton = styled.input`
  display: none;
`;

export const ImageUploadButton = styled.label`
  color: ${COLOR.darkGrey};
  cursor: pointer;
  border: none;
  margin-left: ${SPACING.xxs};
`;

export const MaxLengthText = styled.div<{overlimit: boolean | undefined}>`
  font-size: ${FONT_SIZE.xs};
  text-align: end;
  color: ${(props) => (props.overlimit ? COLOR.error : 'inherit')};
  margin-bottom: ${SPACING.xxxs};
`;
