import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import ArrowLeft from '@/assets/image/icons/left.svg';
import { PATH } from '@/constants/routerLinks';
import { RootState } from '@/store/store';
import { SPACING } from '@/theme/variables';
import { Icon } from '@/ui-components/Icon';
import { SwitchTheme } from '@/ui-components/Switcher';
import { Title } from '@/ui-components/Title';

import { Container } from './styles';

export const HeaderProfile = () => {
  const themes = useSelector((state: RootState) => state.theme.theme);
  const { tweetId } = useParams();

  return (
    <Container>
      <Title row="xs">
        {tweetId && (
          <Link to={PATH.HOME_PAGE}>
            <Icon
              src={ArrowLeft}
              alt="back arrow"
              theme={themes}
              margin={`${SPACING.zero} ${SPACING.xxs}`}
            />
          </Link>
        )}
        Home
      </Title>
      <SwitchTheme dataTestId="theme-id" />
    </Container>
  );
};
