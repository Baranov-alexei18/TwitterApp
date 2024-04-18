import React from 'react';

import { ButtonProps } from '@/components/ui-components/Button/type';

export const Button = React.memo(({ handleClick, children, disabled = false }: ButtonProps) => (
  <button type="button" onClick={handleClick} disabled={disabled}>
    {children}
  </button>
));
