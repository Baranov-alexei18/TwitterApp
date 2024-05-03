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

  @media (max-width: ${BREAKPOINTS.md}px) {
    display: none;
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 34px;
  margin-bottom: ${SPACING.xl};
`;

export const IconRoute = styled.img<{theme: string}>`
  width: 24px;
  height: 24px;
  margin-right: ${SPACING.xs};
  filter: ${(props) => (props.theme === THEME.LIGHT ? 'none' : 'invert(100%)')};
`;

export const NavLink = styled(Link)<{['is-active']: string | undefined}>`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  margin-bottom: ${SPACING.md};
  font-weight: ${(props) => (props['is-active'] === 'false' ? '' : WEIGHT.md)};

  &:hover {
    color: ${COLOR.primary};
  }
`;
