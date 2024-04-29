import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { COLOR } from '@/theme/variables';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: #fff;
  height: 100vh;
  padding: 20px;
  border-right: 1px solid ${COLOR.lightGrey};
`;

export const Icon = styled.img`
  width: 40px;
  height: 34px;
  margin-bottom: 30px;
`;

export const IconRoute = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const NavLink = styled(Link)<{isActive: boolean}>`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 20px;
  color:${({ isActive }) => (isActive ? COLOR.primary : COLOR.dark)};

  &:hover {
    color: ${COLOR.primary};
  }
`;
