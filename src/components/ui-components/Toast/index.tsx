import React, { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type ToastProps = {
  text: string;
  color: string;
  dataTestId: string;
};

export const Toast: FC<ToastProps> = ({ text, color, dataTestId }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return visible
    ? createPortal(
      <div data-testid={dataTestId} style={{ backgroundColor: color }}>
        <p className="toast-text">{text}</p>
      </div>,
        document.getElementById('modal') as Element,
    )
    : null;
};
