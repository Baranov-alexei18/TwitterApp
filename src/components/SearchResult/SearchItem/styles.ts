import styled from 'styled-components';

export const FormContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: ${({ theme: { radius } }) => radius.xxs};
  margin-bottom: ${({ theme: { spacing } }) => spacing.xxs};
  transition: background 0.5s ease;

  &:hover{
    background: ${({ theme: { colors } }) => colors.lightGrey};
  }
  
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.lg}px) {
    button{
      display: none;
    };
  }
`;

export const UserIcon = styled.img`
  width: 36px;
  height: 36px;
  border-radius: ${({ theme: { radius } }) => radius.circle};
  margin-right: ${({ theme: { spacing } }) => spacing.xxxs};

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.lg}px) {
    width: 20px;
    height: 20px;
  }
`;

export const UserInfo = styled.div`
  flex: 1;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xxs};
`;
export const TweetText = styled.div`
  width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.lg}px) {
    width: 100px;
  }
`;

export const Name = styled.div`
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.lg};
  margin-bottom: ${({ theme: { spacing } }) => spacing.xxxs};
`;

export const Email = styled.div`
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; 
  margin-bottom: ${({ theme: { spacing } }) => spacing.xxxs};
`;
