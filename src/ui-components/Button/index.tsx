import React, { memo } from 'react';

import { StyledButton } from './styles';
import { ButtonProps } from './types';

export const Button = memo(({
  background,
  borderRadius,
  borderColor,
  color,
  fontSize,
  children,
  ...rest
}:Partial<ButtonProps> & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
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
