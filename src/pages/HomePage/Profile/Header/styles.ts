import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.lightGrey};
`;

export const UserInfo = styled.div`
  position: relative;
  margin: ${({ theme: { spacing } }) => spacing.zero} ${({ theme: { spacing } }) => spacing.xs};
`;
export const UserUpdate = styled.div`
  display: flex;
  justify-content: end;
`;

export const TitleHeader = styled.div`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.lg};
  margin-top: ${({ theme: { spacing } }) => spacing.md};
  margin-bottom: ${({ theme: { spacing } }) => spacing.xxxs};
`;

export const SubTitleHeader = styled.div`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
  color: ${({ theme: { colors } }) => colors.darkGrey};
  margin-bottom: ${({ theme: { spacing } }) => spacing.sm};
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: ${({ theme: { spacing } }) => spacing.md};
`;

export const Icon = styled.img`
  position: absolute;
  top: -60px;
  width: 100px;
  height: 100px;
  border-radius: ${({ theme: { radius } }) => radius.circle};
  margin-bottom: ${({ theme: { spacing } }) => spacing.xxs};
`;

export const Description = styled.div`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
  color: ${({ theme: { colors } }) => colors.darkGrey};
  margin-bottom: ${({ theme: { spacing } }) => spacing.xxxxl};
`;
