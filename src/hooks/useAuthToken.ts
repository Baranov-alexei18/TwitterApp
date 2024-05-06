import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { LOCALSTORAGE_TOKEN } from '@/constants';
import { PATH } from '@/constants/routerLinks';
import { getUserDataFromFirestore } from '@/services/firestore/getUserDataFromFirestore';
import { setUser } from '@/store/sliceUser';

export const useAuthToken = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem(LOCALSTORAGE_TOKEN);

    if (token) {
      getUserDataFromFirestore(token)
        .then((userData) => {
          dispatch(setUser({ ...userData }));

          if (location.pathname === PATH.SIGN_UP_PAGE
              || location.pathname === PATH.LOG_IN_PAGE
              || location.pathname === PATH.START_PAGE) navigate(PATH.HOME_PAGE);
        })
        .catch((error) => {
          console.error('Ошибка при получении данных пользователя из Firestore:', error);
        });
    }
  }, []);
};
