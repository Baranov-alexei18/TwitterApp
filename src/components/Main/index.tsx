import React from 'react';
import { Outlet } from 'react-router-dom';

import { ErrorBoundary } from '../ErrorBoundary';

export const Main = () => (
  <main data-testid="main-layout">
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  </main>
);
