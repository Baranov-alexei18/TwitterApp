import React from 'react';

import TwitterLogo from '@/assets/image/icons/twitter-logo.svg';
import { SignUpForm } from '@/components/Forms/SignUpForm';
import { SIGN_UP_FORM } from '@/constants/pages/forms';
import { useAuthToken } from '@/hooks/useAuthToken';
import { Icon } from '@/ui-components/Icon';
import { StyledIcon40 } from '@/ui-components/Icon/config';
import { Title } from '@/ui-components/Title';

import { ImageDiv, SignUpWrapper } from './styles';

const SignUpPage = () => {
  const { TITLE } = SIGN_UP_FORM;
  useAuthToken();

  return (
    <SignUpWrapper>
      <ImageDiv>
        <Icon src={TwitterLogo} alt="twitter" {...StyledIcon40} />
      </ImageDiv>
      <Title row="sm">{TITLE}</Title>
      <SignUpForm />
    </SignUpWrapper>
  );
};

export default SignUpPage;
