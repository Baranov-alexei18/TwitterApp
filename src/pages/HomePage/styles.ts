import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  max-width: 1200px;
`;

export const MainContent = styled.div`
  flex: 2.5;
  width: 100%;
  max-width: 590px;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.md}px) {
    flex: 1;
    max-width: calc(100% - 70px);
  }
`;

export const SectionTab = styled.div`
  width: 100px;
  padding-left: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.lightGrey};
`;
