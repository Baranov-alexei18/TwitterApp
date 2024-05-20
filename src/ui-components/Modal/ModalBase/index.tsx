import React, {
  memo, MutableRefObject, useCallback, useRef,
} from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

import { useOutsideClick } from '@/hooks/useOutsideClick';
import { RootState } from '@/store/store';
import { ModalProps } from '@/ui-components/Modal/types';

import { CloseButton, ModalContainer, ModalOverlay } from './styles';

export const ModalBase: React.FC<ModalProps> = memo(
  ({ isOpen, onCloseModal, children }: ModalProps) => {
    const themes = useSelector((state: RootState) => state.theme.theme);
    const modalRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

    useOutsideClick(modalRef, onCloseModal, isOpen);

    if (!isOpen) return null;

    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
    };

    return createPortal(
      <ModalOverlay onClick={onCloseModal}>
        <ModalContainer
          ref={modalRef}
          themeApp={themes}
          onClick={handleModalClick}
        >
          <CloseButton onClick={onCloseModal}>X</CloseButton>
          {children}
        </ModalContainer>
      </ModalOverlay>,
      document.getElementById('modal') as HTMLElement,
    );
  },
);
