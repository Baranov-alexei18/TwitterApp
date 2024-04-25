import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

import { LOCALSTORAGE_TOKEN } from '@/constants';
import { PATH } from '@/constants/routerLinks';
import { getUserDataFromFirestore } from '@/services/firestore/getUserDataFromFirestore';
import { setUser } from '@/store/sliceUser';
import { GlobalStyles } from '@/theme/global';

import { ErrorBoundary } from '../ErrorBoundary';

export const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem(LOCALSTORAGE_TOKEN);
    if (token) {
      getUserDataFromFirestore(token)
        .then((userData) => {
          dispatch(setUser({ ...userData }));
          navigate(PATH.HOME_PAGE);
        })
        .catch((error) => {
          console.error('Ошибка при получении данных пользователя из Firestore:', error);
        });
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </>
  );
};
