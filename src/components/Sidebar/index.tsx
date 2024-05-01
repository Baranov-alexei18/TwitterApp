import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

import TwitterLogo from '@/assets/image/icons/twitter-logo.svg';
import { LOCALSTORAGE_TOKEN } from '@/constants';
import { SidebarLinks } from '@/constants/pages/mainPage';
import { PATH } from '@/constants/routerLinks';
import { auth } from '@/firebase/firebaseConfig';
import { modalClose, modalOpen } from '@/store/sliceModal';
import { clearUser } from '@/store/sliceUser';
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/theme/variables';

import { TweetForm } from '../TweetForm';
import { Button } from '../ui-components/Button';
import { ButtonStyled3 } from '../ui-components/Button/config';
import { ModalBase } from '../ui-components/Modal/ModalBase';
import UserInfoBlock from '../UserInfoBlock';

import {
  Icon, IconRoute, NavLink, SidebarContainer,
} from './styles';

export const Sidebar = () => {
  const isModal = useSelector((state: { modal: { isOpen: boolean } }) => state.modal.isOpen);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const exitFromAccount = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem(LOCALSTORAGE_TOKEN);
      dispatch(clearUser());
      navigate(PATH.LOG_IN_PAGE);
    } catch (error) {
      console.error('Ошибка при выходе из учетной записи:', error);
    }
  };

  const openModal = () => {
    dispatch(modalOpen());
  };

  const closeModal = () => {
    dispatch(modalClose());
  };

  return (
    <SidebarContainer>
      <Icon src={TwitterLogo} alt="twitter-logo" title="twitter" />
      {SidebarLinks.map(({
        icon, title, alt, link,
      }) => (
        <NavLink to={link} key={title} isActive={link === location.pathname}>
          <IconRoute src={icon} alt={`${alt}-icon`} title={alt} />
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
