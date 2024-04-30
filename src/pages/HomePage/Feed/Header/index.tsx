import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import ArrowLeft from '@/assets/image/icons/left.svg';
import { SwitchTheme } from '@/components/ui-components/Switcher';
import { Title } from '@/components/ui-components/Title';
import { PATH } from '@/constants/routerLinks';
import { UserState } from '@/types/user';

import { Container, IconBack } from './styles';

export const HeaderProfile = () => {
  const { tweetId } = useParams();

  return (
    <Container>
      <Title row="xs">
        {tweetId && (
          <Link to={PATH.HOME_PAGE}>
            <IconBack src={ArrowLeft} alt="back arrow" />
          </Link>
        )}
        Home
      </Title>
      <SwitchTheme dataTestId="theme-id" />
    </Container>
  );
};
