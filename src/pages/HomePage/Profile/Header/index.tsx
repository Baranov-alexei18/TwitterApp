import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import DefaultIconUser from '@/assets/image/defaultUserImage.png';
import HeaderBackground from '@/assets/image/headerBackground.png';
import { FormUpdateUser } from '@/components/Forms/UpdateForm';
import { Button } from '@/components/ui-components/Button';
import { ButtonStyled4 } from '@/components/ui-components/Button/config';
import { ModalBase } from '@/components/ui-components/Modal/ModalBase';
import { COLOR } from '@/theme/variables';
import { UserState } from '@/types/user';

import * as Styled from './styles';

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
    <Styled.Container>
      <Styled.UserInfo>
        <Styled.TitleHeader>{user.name}</Styled.TitleHeader>
        <Styled.SubTitleHeader>
          {user.tweets?.length || 0 }
          {' Tweets'}
        </Styled.SubTitleHeader>
      </Styled.UserInfo>
      <Styled.Image src={HeaderBackground} alt="User Avatar" />
      <Styled.UserInfo>
        <Styled.Icon src={user.photoURL ?? DefaultIconUser} alt="Icon" />
        <Styled.UserUpdate>
          <Button
            {...ButtonStyled4}
            background="inherit"
            color="inherit"
            borderColor={COLOR.lightGrey}
            onClick={handleModalOpen}
          >
            Edit profile
          </Button>
        </Styled.UserUpdate>
      </Styled.UserInfo>
      <Styled.UserInfo>
        <Styled.TitleHeader>{user.name}</Styled.TitleHeader>
        <Styled.SubTitleHeader>
          {user.email}
        </Styled.SubTitleHeader>
        <Styled.Description>{user.description}</Styled.Description>
        <Styled.SubTitleHeader>
          <b>0</b>
          {' Following '}
          <b>0</b>
          {' '}
          Followers
        </Styled.SubTitleHeader>
      </Styled.UserInfo>
      <ModalBase
        isOpen={isModal}
        onCloseModal={handleModalClose}
      >
        <FormUpdateUser closeModal={handleModalClose} />
      </ModalBase>
    </Styled.Container>
  );
};
