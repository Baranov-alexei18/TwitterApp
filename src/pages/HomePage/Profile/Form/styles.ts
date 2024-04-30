import { COLOR } from '@/theme/variables';
import styled from 'styled-components';

export const FormUpdateWrapper = styled.form`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const UserInfoUpdate = styled.div`
    flex: 1
    flex-direction: column;
`;

export const PasswordUpdate = styled.div`
  flex: 1;
  flex-direction: column;
  border-left: 1px solid ${COLOR.lightGrey};
  padding: 54px 0 0 20px;
  text-align: center;

  button{
    margin-left: auto;
  }
`;

export const InputImage = styled.input`
  display: none;
`;

export const AvatarImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
`;

export const AvatarContainer = styled.div`
  display: flex;
  gap: 20px;
  text-align: center;
  margin-bottom: 12px;
`;

export const GenderSelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const GenderOption = styled.label`
  margin-right: 20px;
  cursor: pointer;
  
  &:last-child {
    margin-right: 0;
  }
`;

export const GenderRadio = styled.input`
  margin-right: 4px;
`;
