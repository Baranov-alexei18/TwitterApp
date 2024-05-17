import React, {
  memo, MutableRefObject, useCallback, useRef,
} from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

import { ModalProps } from '@/components/ui-components/Modal/types';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { RootState } from '@/store/store';

import { CloseButton, ModalContainer, ModalOverlay } from './styles';

export const ModalBase: React.FC<ModalProps> = memo(
  ({ isOpen, onCloseModal, children }: ModalProps) => {
    const themes = useSelector((state: RootState) => state.theme.theme);
    const modalRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

    useOutsideClick(modalRef, onCloseModal, isOpen);

    if (!isOpen) return null;

    const handleModalClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
    }, []);

    return createPortal(
      <ModalOverlay onClick={onCloseModal}>
        <ModalContainer
          ref={modalRef}
          theme={themes}
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
