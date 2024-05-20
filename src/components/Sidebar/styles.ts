import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { THEME } from '@/constants/theme';

export const SidebarContainer = styled.div<{themeApp: string}>`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  max-width: 300px;
  padding: ${({ theme: { spacing } }) => spacing.md};
  border-right: 1px solid ${({ themeApp, theme: { colors } }) => (themeApp === THEME.LIGHT ? colors.lightGrey : colors.darkGrey)};
  background-color: ${({ themeApp, theme: { colors } }) => (themeApp === THEME.LIGHT ? colors.light : colors.dark)};
  color: ${({ themeApp, theme: { colors } }) => (themeApp === THEME.LIGHT ? colors.dark : colors.light)};

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.lg}px) {
    flex: 0;
    width: 30px;
    padding: ${({ theme: { spacing } }) => spacing.xs};
    
    button{
      display: none 
    }
  }
`;

export const IconLogout = styled.div`
  margin-left: ${({ theme: { spacing } }) => spacing.xxxs};
  
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.lg}px) {
    display: none
  }
`;

export const NavLink = styled(Link)<{active: string | undefined}>`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  margin-bottom: ${({ theme: { spacing } }) => spacing.md};;
  font-weight: ${({ active, theme: { fontWeights } }) => (active === 'false' ? '' : fontWeights.md)};

  &:hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;

export const NavLinkTitle = styled.span`
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.lg}px) {
    display: none;
  }
`;
