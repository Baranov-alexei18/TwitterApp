import styled from 'styled-components';

import { BORDER_RADIUS } from '@/theme/variables';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  min-height: 50px;
  min-width: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 12px;
  border-radius: ${BORDER_RADIUS.xxs}
`;

export const CloseButton = styled.button`
  background-color: transparent;
  margin-left: auto;
  margin-bottom: 4px;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
