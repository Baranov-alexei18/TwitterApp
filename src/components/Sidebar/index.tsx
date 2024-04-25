import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

import TwitterLogo from '@/assets/image/icons/twitter-logo.svg';
import { LOCALSTORAGE_TOKEN, SidebarLinks } from '@/constants';
import { PATH } from '@/constants/routerLinks';
import { auth } from '@/firebase/firebaseConfig';
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/theme/variables';

import { Button } from '../ui-components/Button';
import UserInfoBlock from '../UserInfoBlock';

import {
  Icon, IconRoute, NavLink, SidebarContainer,
} from './style';

export const Sidebar = () => {
  const navigate = useNavigate();

  const exitFromAccount = async () => {
    try {
      await signOut(auth);

      localStorage.removeItem(LOCALSTORAGE_TOKEN);

      navigate(PATH.LOG_IN_PAGE);
    } catch (error) {
      console.error('Ошибка при выходе из учетной записи:', error);
    }
  };

  return (
    <SidebarContainer>
      <Icon src={TwitterLogo} alt="twitter-logo" title="twitter" />
      { SidebarLinks.map(({
        icon, title, alt, link,
      }) => (
        <NavLink to={link} key={title}>
          <IconRoute src={icon} alt={`${alt}-icon`} title={alt} />
          {title}
        </NavLink>
      ))}
      <Button
        background={COLOR.primary}
        color={COLOR.light}
        borderRadius={BORDER_RADIUS.xl}
        height="45px"
        fontSize={FONT_SIZE.xl}
      >
        Tweet
      </Button>
      <UserInfoBlock />
      <Button
        background={COLOR.lightGrey}
        color={COLOR.light}
        borderRadius={BORDER_RADIUS.xl}
        height="45px"
        fontSize={FONT_SIZE.xl}
        onClick={exitFromAccount}
      >
        Log out
      </Button>
    </SidebarContainer>
  );
};
