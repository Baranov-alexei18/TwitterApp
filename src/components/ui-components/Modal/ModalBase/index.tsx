import React, { memo, MutableRefObject, useRef } from 'react';
import { createPortal } from 'react-dom';

import { ModalProps } from '@/components/ui-components/Modal/types';
import { useOutsideClick } from '@/hooks/useOutsideClick';

import { CloseButton, ModalContainer, ModalOverlay } from './styles';

export const ModalBase: React.FC<ModalProps> = memo(
  ({ isOpen, onCloseModal, children }: ModalProps) => {
    const modalRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

    useOutsideClick(modalRef, onCloseModal, isOpen);

    if (!isOpen) return null;

    return createPortal(
      <ModalOverlay onClick={onCloseModal}>
        <ModalContainer ref={modalRef} onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={onCloseModal}>X</CloseButton>
          {children}
        </ModalContainer>
      </ModalOverlay>,
      document.getElementById('modal') as HTMLElement,
    );
  },
);
