import styled from 'styled-components';

import { BORDER_RADIUS, COLOR } from '@/theme/variables';

export const TextAreaWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 16px;
`;

export const TextAreaStyle = styled.textarea<{overLimit: boolean}>`
  position: relative;
  width: 100%;
  height: 70px;
  resize: none;
  padding: 4px;
  border-radius: ${BORDER_RADIUS.xxs};
  border: ${(props) => (props.overLimit ? `1px solid ${COLOR.error}` : 'none')};
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
  color: #fff;
  border: none;
  cursor: pointer;
  margin-left: 8px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: ${COLOR.primary};
  color: #fff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
`;

export const MaxLengthText = styled.div<{overLimit: boolean}>`
  margin-bottom: 4px;
  font-size: 12px;
  text-align: end;
  color: ${(props) => (props.overLimit ? 'red' : 'inherit')};
`;
