import { Outlet } from 'react-router-dom';

import { GlobalStyles } from '@/assets/style/global';

import { ErrorBoundary } from '../ErrorBoundary';

export const App = () => (
  <>
    <GlobalStyles />
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  </>
);
