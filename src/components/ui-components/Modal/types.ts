import { ReactNode } from 'react';

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onCloseModal: () => void;
};

export type ModalConfirmProps = {
  isOpen: boolean;
  children: ReactNode;
  onConfirm: () => void;
  onCloseModal: () => void;
};
