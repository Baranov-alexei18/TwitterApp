import styled from 'styled-components';

import { COLOR } from '@/assets/style/variables';

import { ButtonProps } from './type';

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => props.background || 'transparent'};
  border-radius: ${(props) => props.borderRadius || '0px'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '62px'};
  border: 1px solid ${(props) => props.borderColor || props.background || 'transparent'};
  font-size: ${(props) => props.fontSize || COLOR.dark};
  color: ${(props) => props.color || COLOR.dark};
  margin-bottom: 20px;
  
  &:hover {
    border: 1px solid ${COLOR.dark}
  }
`;
