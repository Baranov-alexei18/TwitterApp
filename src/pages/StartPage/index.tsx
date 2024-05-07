import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import BackTwitter from '@/assets/image/backTwitter.png';
import GoogleLogo from '@/assets/image/icons/google-logo.svg';
import TwitterLogo from '@/assets/image/icons/twitter-logo.svg';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui-components/Button';
import { ButtonStyled1 } from '@/components/ui-components/Button/config';
import { Icon } from '@/components/ui-components/Icon';
import { StyledIcon40 } from '@/components/ui-components/Icon/config';
import { LinkApp } from '@/components/ui-components/Link';
import { Title } from '@/components/ui-components/Title';
import { START_PAGE } from '@/constants/pages/startPage';
import { PATH } from '@/constants/routerLinks';
import { createAccountWithGoogle } from '@/services/auth/createUserWithGoogle';
import { getUserDataFromFirestore } from '@/services/firestore/getUserDataFromFirestore';
import { setUser } from '@/store/sliceUser';

import {
  ContainerWrapper, Content, ContentLinks, ContentText, Image,
} from './styles';

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
    <div>
      <ContainerWrapper>
        <Image src={BackTwitter} alt="Twitter Background" title="back twitter" />
        <Content>
          <Icon src={TwitterLogo} alt="twitter" {...StyledIcon40} />
          <Title row="lg">{TITLE}</Title>
          <Title row="md">{SUBTITLE}</Title>
          <Button
            {...ButtonStyled1}
            onClick={createWithGoogle}
          >
            <Icon src={GoogleLogo} alt="google" {...StyledIcon40} margin="0" />
            <span>{SIGN_UP_GOOGLE}</span>
          </Button>
          <Button
            {...ButtonStyled1}
            onClick={toSignUp}
          >
            {SIGN_UP_EMAIL}
          </Button>
          <ContentText>
            {'By singing up you agree to the '}
            <LinkApp>{LINKS_TO.service}</LinkApp>
            {' and '}
            <LinkApp>{LINKS_TO.policy}</LinkApp>
            {', including '}
            <LinkApp>{LINKS_TO.cookie}</LinkApp>
          </ContentText>
          <ContentLinks>
            <span>{ACCOUNT}</span>
            {' '}
            <LinkApp to={PATH.LOG_IN_PAGE}>{LINKS_TO.login}</LinkApp>
          </ContentLinks>
        </Content>
      </ContainerWrapper>
      <Footer />
    </div>
  );
};

export default StartPage;
