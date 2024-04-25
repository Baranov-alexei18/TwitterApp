import React, { memo } from 'react';

import { StyledButton } from './style';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = memo(({
  background,
  borderRadius,
  borderColor,
  color,
  fontSize,
  children,
  ...rest
}:ButtonProps) => (
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
));
