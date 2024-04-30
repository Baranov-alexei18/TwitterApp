import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter } from 'react-router-dom';

import { App } from '@/components/App';
import { Loader } from '@/components/ui-components/Loader';
import { PATH } from '@/constants/routerLinks';
import { DefaultPage } from '@/pages/HomePage/DefaultPage';
import { Feed } from '@/pages/HomePage/Feed';
import { Profile } from '@/pages/HomePage/Profile';
import { PageNotFound } from '@/pages/PageNotFound';
import { store } from '@/store/store';

const StartPage = lazy(() => import('@/pages/StartPage'));
const BankCardPage = lazy(() => import('@/pages/LoginPage'));
const TimeLinePage = lazy(() => import('@/pages/SignUpPage'));
const HomePage = lazy(() => import('@/pages/HomePage'));

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
            <StartPage />
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
        path: `${PATH.HOME_PAGE}/*`,
        element: (
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        ),
        children: [
          {
            path: '',
            element: <Feed />,
          },
          {
            path: 'tweet/:tweetId',
            element: <Feed />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'default',
            element: <DefaultPage />,
          },
        ],
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
