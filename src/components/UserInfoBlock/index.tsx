import React from 'react';
import { useSelector } from 'react-redux';

import DefaultUserImg from '@/assets/image/defaultUserImage.png';
import { SPACING } from '@/theme/variables';
import { UserState } from '@/types/user';

import { Icon } from '../ui-components/Icon';
import { StyledIcon40, StyledIconCircle40 } from '../ui-components/Icon/config';

import { EllipsisWrapper, InfoContainer, UserInfo } from './styles';

export const UserInfoBlock = () => {
  const user = useSelector((state: UserState) => state.user?.data);

  if (!user) {
    return null;
  }

  return (
    <InfoContainer>
      <Icon
        src={user.photoURL || DefaultUserImg}
        alt="User Icon"
        {...StyledIconCircle40}
        margin={`${SPACING.zero} ${SPACING.zero} ${SPACING.xxxs} ${SPACING.zero}`}
      />
      <UserInfo>
        <EllipsisWrapper>{user.name || 'Guest'}</EllipsisWrapper>
        <EllipsisWrapper>{user.email || 'Guest.exemple.com'}</EllipsisWrapper>
      </UserInfo>
    </InfoContainer>
  );
};

export default UserInfoBlock;
