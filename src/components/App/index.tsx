import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { useAuthToken } from '@/hooks/useAuthToken';
import { GlobalStyles } from '@/theme/global';

import { ErrorBoundary } from '../ErrorBoundary';

export const App = () => {
  const isModal = useSelector((state: { modal: { isOpen: boolean } }) => state.modal.isOpen);
  useAuthToken();

  return (
    <>
      <GlobalStyles modal={isModal} />
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </>
  );
};
