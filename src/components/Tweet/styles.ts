import styled from 'styled-components';

import {
  BORDER_RADIUS, BREAKPOINTS, COLOR, FONT_SIZE, SPACING, WEIGHT, Z_INDEX,
} from '@/theme/variables';

export const TweetContainer = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid ${COLOR.lightGrey};
  width: 100%;
  max-width: 100%;
  padding: ${SPACING.xs} ${SPACING.zero} ;

  @media (max-width: ${BREAKPOINTS.md}px) {
    max-width: 95%;
    padding-right:${SPACING.zero};
  }
`;

export const TweetUserInfo = styled.div`
  position: relative;
  flex: 1;
  width: 80%;
  padding: ${SPACING.zero} ${SPACING.xs}; 
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
  font-weight: ${WEIGHT.lg};
`;

export const UserEmail = styled.span`
  color: ${COLOR.darkGrey};
  font-size: ${FONT_SIZE.xxs};
  margin: ${SPACING.zero} ${SPACING.xxs};
  
  @media (max-width: ${BREAKPOINTS.sm}px) {
    display: none;
  }
`;

export const TweetDate = styled.span`
  color: ${COLOR.darkGrey};
  font-size: ${FONT_SIZE.xxs};
  margin: ${SPACING.zero} ${SPACING.xxs};
`;

export const TweetText = styled.div`
  max-width: inherit;
  word-wrap: break-word; 
  overflow-wrap: break-word;
  overflow: hidden;
  margin-top: ${SPACING.xxxs};
  margin-bottom: ${SPACING.xxs};
`;

export const TweetImage = styled.img`
  max-height: 400px;
  max-width: 95%;
  margin-bottom: ${SPACING.xs};
  border-radius: ${BORDER_RADIUS.xxs}
`;

export const TweetLikes = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LikeCount = styled.span<{active: string}>`
  margin-left: ${SPACING.xxxs};
  color: ${(props) => (props.active === 'false' ? 'inherit' : COLOR.likeColor)}
`;

export const ToolTip = styled.div`
  position: absolute;
  top: ${SPACING.md};
  right: ${SPACING.zero};
  transform: translateX(${SPACING.xxs});
  padding: ${SPACING.xxxs};
  background-color: ${COLOR.light};
  border-radius: ${BORDER_RADIUS.xxs};
  box-shadow: ${SPACING.zero} ${SPACING.xxxs} ${SPACING.xxs} rgba(0, 0, 0, 0.3);
  z-index: ${Z_INDEX.md};
`;

export const ToolTipOption = styled.div`
  cursor: pointer;
  font-size: ${FONT_SIZE.xs};
  padding: ${SPACING.xxs};
  color: ${COLOR.error};

  &:hover {
    color: ${COLOR.primary};
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  cursor: pointer;
  font-size: ${FONT_SIZE.xl}};
  gap: ${SPACING.xxs};
  border: none;
  background-color: transparent;
  margin-top: ${SPACING.xs};
`;
