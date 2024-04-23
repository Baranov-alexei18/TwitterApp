import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './sliceModal';
import themeReducer from './sliceTheme';
import userReducer from './sliceUser';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    modal: modalReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
