import React, { FC } from 'react';

import { StyledInput } from './style';

export type InputType = {
    name: string;
    type: string;
    placeholder: string;
    error?: boolean;
    onChange: () => void;
    register: (name: string) => void;
}
export const Input:FC<Partial<InputType>> = (
  {
    name, type, error, register, ...rest
  },
) => (
  <StyledInput
    {...rest}
    name={name}
    type={type}
    error={error}
    {...register(name, { required: true, maxLength: 20 })}
  />
);
