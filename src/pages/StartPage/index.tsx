import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import BackTwitter from '@/assets/image/backTwitter.png';
import GoogleLogo from '@/assets/image/icons/google-logo.svg';
import TwitterLogo from '@/assets/image/icons/twitter-logo.svg';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui-components/Button';
import { ButtonStyled1 } from '@/components/ui-components/Button/config';
import { ContentText } from '@/components/ui-components/ContentText';
import { LinkApp } from '@/components/ui-components/Link';
import { Title } from '@/components/ui-components/Title';
import { LOCALSTORAGE_TOKEN } from '@/constants';
import { START_PAGE } from '@/constants/pages/startPage';
import { PATH } from '@/constants/routerLinks';
import { useAuthToken } from '@/hooks/useAuthToken';
import { createAccountWithGoogle } from '@/services/auth/createUserWithGoogle';
import { getUserDataFromFirestore } from '@/services/firestore/getUserDataFromFirestore';
import { setUser } from '@/store/sliceUser';
import { Container } from '@/theme/global';
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/theme/variables';

import { Content, Image } from './styles';

const StartPage = () => {
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
      const user = await createAccountWithGoogle();
      const userData = await getUserDataFromFirestore(user!.uid);

      if (userData) {
        dispatch(setUser({ ...userData }));
        navigate(PATH.HOME_PAGE);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container>
        <Image src={BackTwitter} alt="Twitter Background" title="back twitter" />
        <Content>
          <img src={TwitterLogo} alt="twitter" title="twitter" width="41" />
          <Title row="lg">{TITLE}</Title>
          <Title row="md">{SUBTITLE}</Title>
          <Button
            {...ButtonStyled1}
            onClick={createWithGoogle}
          >
            <img src={GoogleLogo} alt="google" title="google" width="41" />
            <span>{SIGN_UP_GOOGLE}</span>
          </Button>
          <Button
            {...ButtonStyled1}
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

export default StartPage;
