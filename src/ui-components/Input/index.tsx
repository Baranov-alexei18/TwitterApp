import React, { FC, useState } from 'react';
import { useController } from 'react-hook-form';
import { useSelector } from 'react-redux';

import CloseEye from '@/assets/image/icons/close-eye.svg';
import OpenEye from '@/assets/image/icons/open-eye.svg';
import { RootState } from '@/store/store';

import {
  StyledInput, WrapperErrorMessage, WrapperIcon, WrapperInput,
} from './styles';
import { InputType } from './types';

export const Input: FC<Partial<InputType>> = ({
  control,
  name,
  rules,
  placeholder,
  disabled,
  type,
  defaultValue,
  mask,
}) => {
  const {
    field: {
      onChange, onBlur, value, ref, ...inputProps
    },
    fieldState: { invalid, error },
  } = useController({
    control,
    rules,
    defaultValue,
    name: name || '',
  });
  const themes = useSelector((state: RootState) => state.theme.theme);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (mask) {
      onChange(mask(event.target.value, '+375'));
      return;
    }
    onChange(event.target.value);
  };

  return (
    <WrapperInput>
      <StyledInput
        {...inputProps}
        error={invalid}
        themeApp={themes}
        placeholder={placeholder}
        type={showPassword && type === 'password' ? 'text' : type}
        ref={ref}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        disabled={disabled}
      />

      {type === 'password' && (
        <WrapperIcon>
          <img
            src={showPassword ? CloseEye : OpenEye}
            alt={showPassword ? 'visibly' : 'unvisibly'}
            onClick={togglePasswordVisibility}
            aria-hidden
          />
        </WrapperIcon>
      )}

      {invalid && (
        <WrapperErrorMessage>
          {error?.message}
        </WrapperErrorMessage>
      )}
    </WrapperInput>
  );
};
