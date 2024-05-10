import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

import Logout from '@/assets/image/icons/logout.svg';
import TwitterLogo from '@/assets/image/icons/twitter-logo.svg';
import { LOCALSTORAGE_TOKEN } from '@/constants';
import { SidebarLinks } from '@/constants/pages/mainPage';
import { PATH } from '@/constants/routerLinks';
import { auth } from '@/firebase/firebaseConfig';
import { modalClose, modalOpen } from '@/store/sliceModal';
import { RootState } from '@/store/store';
import { COLOR } from '@/theme/variables';

import { TweetForm } from '../TweetForm';
import { Button } from '../ui-components/Button';
import { ButtonStyled3 } from '../ui-components/Button/config';
import { Icon } from '../ui-components/Icon';
import { StyledIcon24, StyledIcon40 } from '../ui-components/Icon/config';
import { ModalBase } from '../ui-components/Modal/ModalBase';
import UserInfoBlock from '../UserInfoBlock';

import {
  IconLogout, NavLink, NavLinkTitle, SidebarContainer,
} from './styles';

export const Sidebar = () => {
  const themes = useSelector((state: RootState) => state.theme.theme);
  const modal = useSelector((state: RootState) => state.modal.isOpen);
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

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
    dispatch(modalOpen());
  };

  const closeModal = () => {
    setIsModal(false);
    dispatch(modalClose());
  };

  return (
    <SidebarContainer theme={themes}>
      <Icon src={TwitterLogo} alt="twitter" {...StyledIcon40} />
      {SidebarLinks.map(({
        icon, title, alt, link,
      }) => (
        <NavLink
          key={title}
          to={link}
          active={(link === location.pathname).toString() || undefined}
        >
          <Icon src={icon} alt={alt} theme={themes} {...StyledIcon24} />
          <NavLinkTitle>{title}</NavLinkTitle>
        </NavLink>
      ))}
      <IconLogout>
        <Icon
          src={Logout}
          theme={themes}
          alt="exit"
          onClick={exitFromAccount}
        />
      </IconLogout>
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
      <ModalBase isOpen={modal} onCloseModal={closeModal}>
        <TweetForm />
      </ModalBase>
    </SidebarContainer>
  );
};
