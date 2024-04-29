import React from 'react';
import { useSelector } from 'react-redux';

import DefaultIconUser from '@/assets/image/defaultUserImage.png';
import HeaderBackground from '@/assets/image/headerBackground.png';
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
      <UserInfo>
        <TitleHeader>{user.name}</TitleHeader>
        <SubTitleHeader>
          {user.tweets?.length || 0 }
          {' Tweets'}
        </SubTitleHeader>
      </UserInfo>
      <Image src={HeaderBackground} alt="User Avatar" />
      <UserInfo>
        <Icon src={user.photoURL ?? DefaultIconUser} alt="Icon" />
      </UserInfo>

      <UserInfo>
        <TitleHeader>{user.name}</TitleHeader>
        <SubTitleHeader>
          {user.email}
        </SubTitleHeader>
        <Description>{user.description}</Description>
        <SubTitleHeader>
          <b>67</b>
          {' Following '}
          <b>47</b>
          {' '}
          Followers
        </SubTitleHeader>
      </UserInfo>
    </Container>
  );
};
