import styled from 'styled-components';

import { COLOR } from '@/theme/variables';

import { ButtonProps } from './types';

export const StyledButton = styled.button<Partial<ButtonProps>>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => props.background || 'transparent'};
  border-radius: ${(props) => props.borderRadius || '0px'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  border: 1px solid ${(props) => props.borderColor || props.background || 'transparent'};
  font-size: ${(props) => props.fontSize || COLOR.dark};
  color: ${(props) => props.color || COLOR.dark};
  margin-bottom: ${(props) => props.marginBottom || '0'};
  padding: ${(props) => props.padding || '0'};

  &:hover {
    border: 1px solid ${COLOR.dark};
  }

  &:disabled {
    opacity: 0.5;
  }
`;
