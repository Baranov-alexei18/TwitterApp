import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import BackTwitter from '@/assets/img/backTwitter.png';
import { Container } from '@/assets/style/global';
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/assets/style/variables';
import GoogleLogo from '@/assets/svg/google-logo.svg';
import TwitterLogo from '@/assets/svg/twitter-logo.svg';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui-components/Button';
import { ContentText } from '@/components/ui-components/ContentText';
import { LinkApp } from '@/components/ui-components/Link';
import { Title } from '@/components/ui-components/Title';
import { START_PAGE } from '@/constants';
import { PATH } from '@/constants/routerLinks';
import { createAccountWithGoogle } from '@/services/auth/createUserWithGoogle';

import { Content, Image } from './style';

const HomePage = () => {
  const {
    TITLE,
    SUBTITLE,
    SIGN_UP_GOOGLE,
    SIGN_UP_EMAIL,
    LINKS_TO,
    ACCOUNT,
  } = START_PAGE;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toSignUp = () => {
    navigate(PATH.SIGN_UP_PAGE);
  };

  const createWithGoogle = async () => {
    try {
      await createAccountWithGoogle(dispatch);
      navigate(PATH.HOME_PAGE);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container>
        <Image src={BackTwitter} alt="Twitter Background" title="back twitter" />
        <Content>
          <img src={TwitterLogo} alt="twitter" title="twitter" height="50" width="41" />
          <Title size="64px" weight="900">{TITLE}</Title>
          <Title size="42px" weight="900">{SUBTITLE}</Title>
          <Button
            width="400px"
            height="62px"
            borderRadius={BORDER_RADIUS.xl}
            fontSize={FONT_SIZE.xl}
            borderColor={COLOR.lightGrey}
            onClick={createWithGoogle}
          >
            <img src={GoogleLogo} alt="google" title="google" height="50" width="41" />
            <span>{SIGN_UP_GOOGLE}</span>
          </Button>
          <Button
            width="400px"
            height="62px"
            borderRadius={BORDER_RADIUS.xl}
            fontSize={FONT_SIZE.xl}
            borderColor={COLOR.lightGrey}
            onClick={toSignUp}
          >
            {SIGN_UP_EMAIL}
          </Button>
          <ContentText
            size={FONT_SIZE.xs}
            width="375px"
          >
            {'By singing up you agree to the '}
            <LinkApp>{LINKS_TO.service}</LinkApp>
            {' and '}
            <LinkApp>{LINKS_TO.policy}</LinkApp>
            {', including '}
            <LinkApp>{LINKS_TO.cookie}</LinkApp>
          </ContentText>
          <ContentText size={FONT_SIZE.sm}>
            <span>{ACCOUNT}</span>
            {' '}
            <LinkApp to={PATH.LOG_IN_PAGE}>{LINKS_TO.login}</LinkApp>
          </ContentText>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
