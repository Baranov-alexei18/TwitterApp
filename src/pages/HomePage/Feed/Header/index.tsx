import React from 'react';
import { useSelector } from 'react-redux';

import DefaultIconUser from '@/assets/image/defaultUserImage.png';
import HeaderBackground from '@/assets/image/headerBackground.png';
import { SwitchTheme } from '@/components/ui-components/Switcher';
import { Title } from '@/components/ui-components/Title';
import { UserState } from '@/types/user';

import {
  Container, Description, Icon, Image,
  SubTitleHeader, TitleHeader,
  UserInfo,
} from './styles';

export const HeaderProfile = () => {
  const user = useSelector((state: UserState) => state.user.data);

  return (
    <Container>
      <Title row="xs"> Home </Title>
      <SwitchTheme dataTestId="theme-id" />
    </Container>
  );
};
