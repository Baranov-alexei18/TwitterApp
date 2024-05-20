import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useAuthToken } from '@/hooks/useAuthToken';
import { RootState } from '@/store/store';
import { GlobalStyles, ThemeContainer } from '@/theme/global';
import { themes } from '@/theme/variables';

import { ErrorBoundary } from '../ErrorBoundary';

export const App = () => {
  const isModal = useSelector((state: { modal: { isOpen: boolean } }) => state.modal.isOpen);
  const themesApp = useSelector((state: RootState) => state.theme.theme);

  useAuthToken();

  return (
    <ThemeProvider theme={themes}>
      <ThemeContainer data-testid="theme-main" themeApp={themesApp}>
        <GlobalStyles modal={isModal} />
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </ThemeContainer>
    </ThemeProvider>
  );
};
