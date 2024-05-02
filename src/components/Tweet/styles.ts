import styled from 'styled-components';

import {
  BORDER_RADIUS, COLOR, FONT_SIZE, SPACING, WEIGHT, Z_INDEX,
} from '@/theme/variables';

export const TweetContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: ${SPACING.xs} ${SPACING.xxxs} ;
  border-bottom: 1px solid ${COLOR.lightGrey};
`;

export const TweetIcon = styled.img`
  width: 40px;
  height: 40px;
  overflow: hidden;
  margin: ${SPACING.xxxs} ${SPACING.zero} ${SPACING.zero} ${SPACING.xs};
  border-radius: ${BORDER_RADIUS.circle};
`;

export const TweetUserInfo = styled.div`
  position: relative;
  flex: 1;
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
`;

export const TweetDate = styled.span`
  color: ${COLOR.darkGrey};
  font-size: ${FONT_SIZE.xxs};
`;

export const TweetText = styled.div`
  word-wrap: break-word; 
  overflow-wrap: break-word;
  max-width: 530px;
  margin-top: ${SPACING.xxxs};
  margin-bottom: ${SPACING.xxs};
`;

export const TweetImage = styled.img`
  max-height: 400px;
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
  color: ${(props) => (!props.active ? COLOR.dark : COLOR.likeColor)}
`;

export const MoreOptionsIcon = styled.img`
  position: relative;
  cursor: pointer;
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
  margin: ${SPACING.xxs};
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
