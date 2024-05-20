import styled from 'styled-components';

export const FormUpdateWrapper = styled.form`
  display: flex;
  justify-content: center;
  gap: ${({ theme: { spacing } }) => spacing.md};
  width: 500px;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.md}px) {
    flex-direction: column;
    width: 100%;
    min-width: 230px;
    gap: ${({ theme: { spacing } }) => spacing.zero}
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
  margin-top: ${({ theme: { spacing } }) => spacing.sm};
  padding: ${({ theme: { spacing } }) => `${spacing.xxxxl} ${spacing.zero} ${spacing.zero} ${spacing.md}`};
  border-left: 1px solid ${({ theme: { colors } }) => colors.darkGrey};

  button{
    margin-left: auto;
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.md}px) {
    border-left: none;
    padding: ${({ theme: { spacing } }) => spacing.zero};
    margin-top: ${({ theme: { spacing } }) => spacing.zero};
  }
`;

export const InputImage = styled.input`
  display: none;
`;

export const AvatarImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: ${({ theme: { radius } }) => radius.circle};
  cursor: pointer;
`;

export const AvatarContainer = styled.div`
  display: flex;
  text-align: center;
  gap: ${({ theme: { spacing } }) => spacing.md};
  margin-bottom: ${({ theme: { spacing } }) => spacing.xs};
`;

export const GenderSelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing.md};
`;

export const GenderOption = styled.label`
  cursor: pointer;
  margin-right: ${({ theme: { spacing } }) => spacing.md};
  
  &:last-child {
    margin-right: ${({ theme: { spacing } }) => spacing.zero};
  }
`;

export const GenderRadio = styled.input`
  margin-right: ${({ theme: { spacing } }) => spacing.xxxs};
`;
