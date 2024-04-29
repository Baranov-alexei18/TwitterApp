import React from 'react';

import { StyledSelect } from './styles';
import { SelectProps } from './types';

export const Select: React.FC<Partial<SelectProps>> = ({
  options,
  size,
  borderColor,
  color,
  placeholder,
  backgroundColor,
  onChange,
}) => (
  <StyledSelect
    size={size}
    borderColor={borderColor}
    color={color}
    backgroundColor={backgroundColor}
    onChange={onChange}
  >
    {placeholder && (
    <option value="" hidden>
      {placeholder}
    </option>
    )}
    {options!.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </StyledSelect>
);
