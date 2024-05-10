import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { useAuthToken } from '@/hooks/useAuthToken';
import { RootState } from '@/store/store';
import { GlobalStyles, ThemeContainer } from '@/theme/global';

import { ErrorBoundary } from '../ErrorBoundary';

export const App = () => {
  const isModal = useSelector((state: { modal: { isOpen: boolean } }) => state.modal.isOpen);
  const themes = useSelector((state: RootState) => state.theme.theme);

  useAuthToken();

  return (
    <ThemeContainer data-testid="theme-main" theme={themes}>
      <GlobalStyles modal={isModal} />
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </ThemeContainer>
  );
};
