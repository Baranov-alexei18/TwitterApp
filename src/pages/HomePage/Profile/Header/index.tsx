import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DefaultIconUser from '@/assets/image/defaultUserImage.png';
import HeaderBackground from '@/assets/image/headerBackground.png';
import { Button } from '@/components/ui-components/Button';
import { ButtonStyled4 } from '@/components/ui-components/Button/config';
import { ModalBase } from '@/components/ui-components/Modal/ModalBase';
import { modalClose, modalOpen } from '@/store/sliceModal';
import { COLOR } from '@/theme/variables';
import { UserState } from '@/types/user';

import { FormUpdateUser } from '../../../../components/Forms/UpdateForm';

import {
  Container, Description, Icon, Image,
  SubTitleHeader, TitleHeader,
  UserInfo,
  UserUpdate,
} from './styles';

export const HeaderProfile = () => {
  const user = useSelector((state: UserState) => state.user.data);
  const [isModal, setIsModal] = useState(false);

  const handleModalOpen = () => {
    setIsModal(true);
  };
  const handleModalClose = () => {
    setIsModal(false);
  };

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
        <UserUpdate>
          <Button
            {...ButtonStyled4}
            background="inherit"
            color="inherit"
            borderColor={COLOR.lightGrey}
            onClick={handleModalOpen}
          >
            Edit profile
          </Button>
        </UserUpdate>
      </UserInfo>
      <UserInfo>
        <TitleHeader>{user.name}</TitleHeader>
        <SubTitleHeader>
          {user.email}
        </SubTitleHeader>
        <Description>{user.description}</Description>
        <SubTitleHeader>
          <b>0</b>
          {' Following '}
          <b>0</b>
          {' '}
          Followers
        </SubTitleHeader>
      </UserInfo>
      <ModalBase
        isOpen={isModal}
        onCloseModal={handleModalClose}
      >
        <FormUpdateUser closeModal={() => handleModalClose()} />
      </ModalBase>
    </Container>
  );
};
