import styled from 'styled-components';

import { ButtonProps } from './types';

export const StyledButton = styled.button<Partial<ButtonProps>>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${({ background }) => background || 'transparent'};
    border-radius: ${({ borderRadius }) => borderRadius || '0px'};
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || 'auto'};
    border: 1px solid ${({ borderColor, background }) => borderColor || background || 'transparent'};
    font-size: ${({ fontSize, theme: { colors } }) => fontSize || colors.dark};
    color: ${({ color, theme: { colors } }) => color || colors.dark};
    margin-bottom: ${({ marginBottom, theme: { spacing } }) => marginBottom || spacing.zero};
    padding: ${({ padding, theme: { spacing } }) => padding || spacing.zero};

    &:hover {
      border: 1px solid ${({ theme: { colors } }) => colors.dark};
    }

    &:disabled {
      opacity: 0.7;
    }
  `;
