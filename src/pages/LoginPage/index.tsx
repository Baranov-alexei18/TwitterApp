import React from 'react';

import { LoginPageForm } from '@/components/Forms/LoginForm';
import { LOGIN_FORM } from '@/constants/pages/forms';
import { PATH } from '@/constants/routerLinks';
import { useAuthToken } from '@/hooks/useAuthToken';
import { LinkApp } from '@/ui-components/Link';

import { ContainerWrapper, WrapperLink } from './styles';

const LoginPage = () => {
  const { SIGN_UP } = LOGIN_FORM;
  const { SIGN_UP_PAGE } = PATH;

  useAuthToken();

  return (
    <ContainerWrapper>
      <LoginPageForm />
      <WrapperLink>
        <LinkApp to={SIGN_UP_PAGE}>
          {SIGN_UP}
        </LinkApp>
      </WrapperLink>
    </ContainerWrapper>
  );
};

export default LoginPage;
