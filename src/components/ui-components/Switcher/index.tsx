import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { THEME } from '@/constants/theme';
import { setTheme } from '@/store/sliceTheme';
import { AppDispatch, RootState } from '@/store/store';

export const SwitchApp: React.FC<{ dataTestId: string }> = ({ dataTestId }) => {
  const themes = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch<AppDispatch>();

  const changeTheme = () => {
    dispatch(setTheme(themes === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));
  };

  return (
    <div>
      <button
        data-testid={dataTestId}
        type="button"
        aria-label="Switch-theme"
        onClick={changeTheme}
      >
        <div />
      </button>
    </div>
  );
};
