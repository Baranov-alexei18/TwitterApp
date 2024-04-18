import React from 'react';

import { StyledButton } from './style';
import { ButtonProps } from './type';

export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  background,
  borderRadius,
  borderColor,
  color,
  fontSize,
  children,
  ...rest
}) => (
  <StyledButton
    background={background}
    borderRadius={borderRadius}
    color={color}
    fontSize={fontSize}
    borderColor={borderColor || background}
    {...rest}
  >
    {children}
  </StyledButton>
);
