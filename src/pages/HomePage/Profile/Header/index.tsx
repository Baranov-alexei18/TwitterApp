import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DefaultIconUser from '@/assets/image/defaultUserImage.png';
import HeaderBackground from '@/assets/image/headerBackground.png';
import { FormUpdateUser } from '@/components/Forms/UpdateForm';
import { modalClose, modalOpen } from '@/store/sliceModal';
import { RootState } from '@/store/store';
import { COLOR } from '@/theme/variables';
import { UserState } from '@/types/user';
import { Button } from '@/ui-components/Button';
import { ButtonStyled4 } from '@/ui-components/Button/config';
import { ModalBase } from '@/ui-components/Modal/ModalBase';
import { USER_UPDATE_MODAL } from '@/ui-components/Modal/options';

import * as Styled from './styles';

export const HeaderProfile = () => {
  const user = useSelector((state: UserState) => state.user.data);
  const { isOpen, modalType } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    dispatch(modalOpen({
      modalType: USER_UPDATE_MODAL,
    }));
  };
  const handleModalClose = () => {
    dispatch(modalClose());
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
      {modalType === USER_UPDATE_MODAL && (
        <ModalBase
          isOpen={isOpen}
          onCloseModal={handleModalClose}
        >
          <FormUpdateUser closeModal={handleModalClose} />
        </ModalBase>
      )}
    </Styled.Container>
  );
};
