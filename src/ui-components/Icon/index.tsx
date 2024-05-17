import React from 'react';

import { StyledIcon } from './styles';
import { IconProps } from './types';

export const Icon: React.FC<IconProps> = ({
  src, alt, height, width, radius, margin, theme, onClick,
}) => (
  <StyledIcon
    src={src}
    title={alt}
    alt={`${alt}-icon`}
    height={height}
    width={width}
    radius={radius}
    margin={margin}
    theme={theme}
    onClick={onClick}
  />
);
