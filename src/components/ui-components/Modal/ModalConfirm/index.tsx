import React from 'react';

import { ModalConfirmProps } from '@/components/ui-components/Modal/types';
import { COLOR } from '@/theme/variables';

import { Button } from '../../Button';
import { ButtonStyled4 } from '../../Button/config';
import { ModalBase } from '../ModalBase';

import { WrapperButton } from './styles';

export const ModalConfirm = React.memo(
  ({
    isOpen, onConfirm, onCloseModal, children,
  }: ModalConfirmProps) => {
    if (!isOpen) return null;

    const handleConfirm = () => () => {
      onConfirm();
    };
    return (
      <ModalBase isOpen={isOpen} onCloseModal={onCloseModal}>
        {children}
        <WrapperButton>
          <Button onClick={handleConfirm()} {...ButtonStyled4} background={COLOR.error}>
            Ok
          </Button>
          <Button onClick={onCloseModal} {...ButtonStyled4} background={COLOR.lightGrey}>
            Cancel
          </Button>
        </WrapperButton>
      </ModalBase>
    );
  },
);
