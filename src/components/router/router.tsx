import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter } from 'react-router-dom';

import { App } from '@/components/App';
import { Loader } from '@/components/ui-components/Loader';
import { PATH } from '@/constants/routerLinks';
import { PageNotFound } from '@/pages/PageNotFound';
import { store } from '@/store/store';

const HomePage = lazy(() => import('@/pages/Home'));
const BankCardPage = lazy(() => import('@/pages/BankCard'));
const ContactPage = lazy(() => import('@/pages/Contact'));
const TimeLinePage = lazy(() => import('@/pages/Timeline'));

export const router = createBrowserRouter([
  {
    path: PATH.START_PAGE,
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: PATH.START_PAGE,
        element: (
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: PATH.SIGN_UP_PAGE,
        element: (
          <Suspense fallback={<Loader />}>
            <TimeLinePage />
          </Suspense>
        ),
      },
      {
        path: PATH.LOG_IN_PAGE,
        element: (
          <Suspense fallback={<Loader />}>
            <BankCardPage />
          </Suspense>
        ),
      },
      {
        path: PATH.HOME_PAGE,
        element: (
          <Suspense fallback={<Loader />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: PATH.NOT_FOUND,
        element: (
          <Suspense fallback={<Loader />}>
            <PageNotFound />
          </Suspense>
        ),
      },
    ],
  },
]);
