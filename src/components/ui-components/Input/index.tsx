import React from 'react';

import { InputProps } from '@/components/ui-components/Input/type';

export const Input: React.FC<InputProps> = ({ value, ...rest }) => (
  <input {...rest} value={value} />
);
