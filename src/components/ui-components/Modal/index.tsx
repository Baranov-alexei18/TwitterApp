import React, { MutableRefObject, useRef } from 'react';
import { createPortal } from 'react-dom';

import { ModalProps } from '@/components/ui-components/Modal/types';
import { useOutsideClick } from '@/hooks/useOutsideClick';

export const ModalBase: React.FC<ModalProps> = React.memo(
  ({ isOpen, onCloseModal, children }: ModalProps) => {
    const modalRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

    useOutsideClick(modalRef, onCloseModal, isOpen);

    if (!isOpen) return null;
    return createPortal(
      <div ref={modalRef} onClick={onCloseModal} aria-hidden>
        <div onClick={(e) => e.stopPropagation()} aria-hidden>
          <div>
            <button type="button" onClick={onCloseModal}>
              X
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>,
      document.getElementById('modal') as HTMLElement,
    );
  },
);
