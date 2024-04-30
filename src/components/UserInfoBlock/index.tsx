import React from 'react';
import { useSelector } from 'react-redux';

import DefaultUserImg from '@/assets/image/defaultUserImage.png';
import { UserState } from '@/types/user';

import {
  EllipsisWrapper, InfoContainer, UserIcon, UserInfo,
} from './styles';

export const UserInfoBlock = () => {
  const user = useSelector((state: UserState) => state.user?.data);

  if (!user) {
    return null;
  }

  return (
    <InfoContainer>
      <UserIcon src={user.photoURL || DefaultUserImg} alt="User Icon" />
      <UserInfo>
        <EllipsisWrapper>{user.name || 'Guest'}</EllipsisWrapper>
        <EllipsisWrapper>{user.email || 'Guest.exemple.com'}</EllipsisWrapper>
      </UserInfo>
    </InfoContainer>
  );
};

export default UserInfoBlock;
