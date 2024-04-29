import React, { memo, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { StyledToast } from './styles';
import { ToastProps } from './types';

export const Toast = memo((
  { text = '', type = 'success', dataTestId = 'toast' }:Partial<ToastProps>,
) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return visible
    ? createPortal(
      <StyledToast type={type} data-testid={dataTestId}>
        <p>{text}</p>
      </StyledToast>,
      document.body,
    )
    : null;
});
