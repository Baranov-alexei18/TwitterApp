import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

import TwitterLogo from '@/assets/image/icons/twitter-logo.svg';
import { LOCALSTORAGE_TOKEN } from '@/constants';
import { SidebarLinks } from '@/constants/pages/mainPage';
import { PATH } from '@/constants/routerLinks';
import { auth } from '@/firebase/firebaseConfig';
import { RootState } from '@/store/store';
import { COLOR } from '@/theme/variables';

import { TweetForm } from '../TweetForm';
import { Button } from '../ui-components/Button';
import { ButtonStyled3 } from '../ui-components/Button/config';
import { ModalBase } from '../ui-components/Modal/ModalBase';
import UserInfoBlock from '../UserInfoBlock';

import {
  Icon, IconRoute, NavLink, SidebarContainer,
} from './styles';

export const Sidebar = () => {
  const themes = useSelector((state: RootState) => state.theme.theme);
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const exitFromAccount = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem(LOCALSTORAGE_TOKEN);
      setIsModal(false);
      navigate(PATH.LOG_IN_PAGE);
    } catch (error) {
      console.error('Ошибка при выходе из учетной записи:', error);
    }
  };

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <SidebarContainer theme={themes}>
      <Icon src={TwitterLogo} alt="twitter-logo" title="twitter" />
      {SidebarLinks.map(({
        icon, title, alt, link,
      }) => (
        <NavLink
          key={title}
          to={link}
          is-active={(link === location.pathname).toString() || undefined}
        >
          <IconRoute theme={themes} src={icon} alt={`${alt}-icon`} title={alt} />
          {title}
        </NavLink>
      ))}
      <Button
        {...ButtonStyled3}
        onClick={openModal}
      >
        Tweet
      </Button>
      <UserInfoBlock />
      <Button
        {...ButtonStyled3}
        background={COLOR.lightGrey}
        onClick={exitFromAccount}
      >
        Log out
      </Button>
      <ModalBase isOpen={isModal} onCloseModal={closeModal}>
        <TweetForm />
      </ModalBase>
    </SidebarContainer>
  );
};
