import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { THEME } from '@/constants/theme';
import { ThemeState, ThemesType } from '@/types/theme';

const initialState: ThemeState = {
  theme: THEME.LIGHT,
};

const setThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemesType>) {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = setThemeSlice.actions;

export default setThemeSlice.reducer;
