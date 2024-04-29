import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { THEME } from '@/constants/theme';
import { setTheme } from '@/store/sliceTheme';
import { AppDispatch, RootState } from '@/store/store';

import { SwitchButton, SwitchWrapper } from './styles';

export const SwitchTheme: React.FC<{ dataTestId: string }> = ({ dataTestId }) => {
  const themes = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch<AppDispatch>();

  const changeTheme = () => {
    dispatch(setTheme(themes === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));
  };

  return (
    <SwitchWrapper data-testid={dataTestId} onClick={changeTheme} theme={themes}>
      <SwitchButton theme={themes} />
    </SwitchWrapper>
  );
};
