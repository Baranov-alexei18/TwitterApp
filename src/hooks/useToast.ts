import { useEffect, useState } from 'react';

import { TIME_TOAST } from '@/constants';

export const useToast = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const [type, setType] = useState<'success' | 'error'>('success');

  const showToast = (message:string, toastType:'success' | 'error') => {
    setText(message);
    setType(toastType);
    setVisible(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (visible) {
      timer = setTimeout(() => {
        setVisible(false);
      }, TIME_TOAST);
    }
    return () => clearTimeout(timer);
  }, [visible]);

  return {
    showToast, visible, text, type,
  };
};
