import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { THEME } from '@/constants/theme';
import {
  BREAKPOINTS, COLOR, SPACING, WEIGHT,
} from '@/theme/variables';

export const SidebarContainer = styled.div<{theme: string}>`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  max-width: 300px;
  padding: ${SPACING.md};
  border-right: 1px solid ${(props) => (props.theme === THEME.LIGHT ? COLOR.lightGrey : COLOR.darkGrey)};
  background-color: ${(props) => (props.theme === THEME.LIGHT ? COLOR.light : COLOR.dark)};
  color: ${(props) => (props.theme === THEME.LIGHT ? COLOR.dark : COLOR.light)};

  @media (max-width: ${BREAKPOINTS.lg}px) {
    flex: 0;
    width: 30px;
    padding: ${SPACING.xs};
    
    button{
      display: none 
    }
  }
`;

export const IconLogout = styled.div`
  margin-left: ${SPACING.xxxs};
  
  @media (min-width: ${BREAKPOINTS.lg}px) {
    display: none
  }
`;

export const NavLink = styled(Link)<{active: string | undefined}>`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  margin-bottom: ${SPACING.md};
  font-weight: ${(props) => (props.active === 'false' ? '' : WEIGHT.md)};

  &:hover {
    color: ${COLOR.primary};
  }
`;

export const NavLinkTitle = styled.span`
  @media (max-width: ${BREAKPOINTS.lg}px) {
    display: none;
  }
`;
