import React from 'react';

import { LinkApp } from '@/components/ui-components/Link';
import { LOGIN_FORM } from '@/constants/pages/forms';
import { PATH } from '@/constants/routerLinks';

import { LoginPageForm } from './Form';
import { ContainerWrapper, WrapperLink } from './styles';

const LoginPage = () => {
  const { SIGN_UP } = LOGIN_FORM;
  const { SIGN_UP_PAGE } = PATH;

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
