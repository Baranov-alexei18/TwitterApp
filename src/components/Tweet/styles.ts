import styled from 'styled-components';

import { BORDER_RADIUS, COLOR, Z_INDEX } from '@/theme/variables';

export const TweetContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  padding: 4px 12px 12px 0;
  border-bottom: 1px solid #ccc;
`;

export const TweetIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin: 4px 0 0 12px;
`;

export const TweetUserInfo = styled.div`
  position: relative;
  flex: 1;
  padding: 0 12px; 
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
  font-weight: bold;
`;

export const UserEmail = styled.span`
  color: #777;
  margin: 0 8px;
  font-size: 12px;
`;

export const TweetDate = styled.span`
  color: #777;
  font-size: 12px;
`;

export const TweetText = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const TweetImage = styled.img`
  max-height: 400px;
  margin-bottom: 10px;
  border-radius: ${BORDER_RADIUS.xxs}
`;

export const TweetLikes = styled.div`
  display: flex;
  align-items: center;
`;

export const LikeCount = styled.span`
  margin-left: 5px;
`;

export const MoreOptionsIcon = styled.img`
  position: relative;
  cursor: pointer;
`;

export const ToolTip = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  transform: translateX(10px);
  padding: 4px;
  background-color: ${COLOR.light};
  border-radius: ${BORDER_RADIUS.xxs};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: ${Z_INDEX.md};
`;

export const ToolTipOption = styled.div`
  color: ${COLOR.error};
  font-size: 14px;
  cursor: pointer;
  margin: 8px;

  &:hover {
    color: ${COLOR.primary};
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  gap: 4px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-top: 12px;
`;
