import styled from 'styled-components';

import {
  BORDER_RADIUS,
  COLOR,
  FONT_SIZE,
  SPACING,
  WEIGHT,
} from '@/theme/variables';

export const FormContainer = styled.div`
  cursor: pointer;
  display: flex;
  width: 100%;
  align-items: center;
  border-radius: ${BORDER_RADIUS.xxs};
  margin-bottom: ${SPACING.xxs};
  transition: background 0.5s ease;

  &:hover{
    background: ${COLOR.lightGrey}
  }
`;

export const UserIcon = styled.img`
  width: 36px;
  height: 36px;
  border-radius: ${BORDER_RADIUS.circle};
  margin-right: ${SPACING.xxxs};
`;

export const UserInfo = styled.div`
  flex: 1;
  font-size: ${FONT_SIZE.xxs};
`;
export const TweetText = styled.div`
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Name = styled.div`
  font-weight: ${WEIGHT.lg};
  margin-bottom: ${SPACING.xxxs};
`;

export const Email = styled.div`
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; 
  margin-bottom: ${SPACING.xxxs};
`;
