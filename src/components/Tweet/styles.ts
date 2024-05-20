import styled from 'styled-components';

export const TweetContainer = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.lightGrey};
  width: 100%;
  max-width: 100%;
  padding: ${({ theme: { spacing } }) => `${spacing.xs} ${spacing.zero}`};

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.md}px) {
    max-width: 95%;
    padding-right: ${({ theme: { spacing } }) => spacing.zero};
  }
`;

export const TweetUserInfo = styled.div`
  position: relative;
  flex: 1;
  width: 80%;
  padding: ${({ theme: { spacing } }) => `${spacing.zero} ${spacing.xs}`}; 
`;

export const UserNames = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderTweets = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const UserName = styled.span`
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.lg};
`;

export const UserEmail = styled.span`
  color: ${({ theme: { colors } }) => colors.darkGrey};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xxs};
  margin: ${({ theme: { spacing } }) => `${spacing.zero} ${spacing.xxs}`};
  
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.sm}px) {
    display: none;
  }
`;

export const TweetDate = styled.span`
  color: ${({ theme: { colors } }) => colors.darkGrey};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xxs};
  margin: ${({ theme: { spacing } }) => `${spacing.zero} ${spacing.xxs}`};
`;

export const TweetText = styled.div`
  max-width: inherit;
  word-wrap: break-word; 
  overflow-wrap: break-word;
  overflow: hidden;
  margin-top: ${({ theme: { spacing } }) => spacing.xxxs};
  margin-bottom: ${({ theme: { spacing } }) => spacing.xxs};
`;

export const TweetImage = styled.img`
  max-height: 400px;
  max-width: 95%;
  margin-bottom: ${({ theme: { spacing } }) => spacing.xs};
  border-radius: ${({ theme: { radius } }) => radius.xxs};
`;

export const TweetLikes = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LikeCount = styled.span<{active: string}>`
  margin-left: ${({ theme: { spacing } }) => spacing.xxxs};
  color: ${({ active, theme: { colors } }) => (active === 'false' ? 'inherit' : colors.likeColor)}
`;

export const ToolTip = styled.div`
  position: absolute;
  top: ${({ theme: { spacing } }) => spacing.md};
  right: ${({ theme: { spacing } }) => spacing.zero};
  transform: translateX('8px');
  padding: ${({ theme: { spacing } }) => spacing.xxxs};
  background-color: ${({ theme: { colors } }) => colors.light};
  border-radius: ${({ theme: { radius } }) => radius.xxs};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  z-index: ${({ theme: { zIndex } }) => zIndex.md};
`;

export const ToolTipOption = styled.div`
  cursor: pointer;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
  padding: ${({ theme: { spacing } }) => spacing.xxs};
  color: ${({ theme: { colors } }) => colors.error};

  &:hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  cursor: pointer;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
  gap: ${({ theme: { spacing } }) => spacing.xxs};
  border: none;
  background-color: transparent;
  margin-top: ${({ theme: { spacing } }) => spacing.xs};
`;
