import styled from 'styled-components';

import {
  BORDER_RADIUS, BREAKPOINTS, COLOR, SPACING,
} from '@/theme/variables';

export const FormUpdateWrapper = styled.form`
  display: flex;
  justify-content: center;
  gap: ${SPACING.md};
  width: 500px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    flex-direction: column;
    width: 100%;
    min-width:230px;
    gap: ${SPACING.zero}
  }
`;

export const UserInfoUpdate = styled.div`
    flex: 1
    flex-direction: column;
`;

export const PasswordUpdate = styled.div`
  flex: 1;
  flex-direction: column;
  text-align: center;
  margin-top: ${SPACING.sm};
  padding: ${SPACING.xxxxl} ${SPACING.zero} ${SPACING.zero} ${SPACING.md};
  border-left: 1px solid ${COLOR.lightGrey};

  button{
    margin-left: auto;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    border-left: none;
    padding: ${SPACING.zero};
    margin-top: ${SPACING.zero};
  }
`;

export const InputImage = styled.input`
  display: none;
`;

export const AvatarImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: ${BORDER_RADIUS.circle};
  cursor: pointer;
`;

export const AvatarContainer = styled.div`
  display: flex;
  text-align: center;
  gap: ${SPACING.md};
  margin-bottom: ${SPACING.xs};
`;

export const GenderSelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${SPACING.md};
`;

export const GenderOption = styled.label`
  cursor: pointer;
  margin-right: ${SPACING.md};
  
  &:last-child {
    margin-right: ${SPACING.zero};
  }
`;

export const GenderRadio = styled.input`
  margin-right: ${SPACING.xxxs};
`;
