import React, { memo, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { TIME_TOAST } from '@/constants';

import { StyledToast } from './styles';
import { ToastProps } from './types';

export const Toast = memo((
  { text = '', type = 'success', dataTestId = 'toast' }:Partial<ToastProps>,
) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, TIME_TOAST);
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
