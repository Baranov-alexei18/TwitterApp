import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './sliceModal';
import themeReducer from './sliceTheme';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
