import React from 'react';
import { useForm } from 'react-hook-form';

import { Container } from '@/assets/style/global';
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/assets/style/variables';
import TwitterLogo from '@/assets/svg/twitter-logo.svg';
import { Button } from '@/components/ui-components/Button';
import { Input } from '@/components/ui-components/Input';
import { LinkApp } from '@/components/ui-components/Link';
import { Title } from '@/components/ui-components/Title';
import { LOGIN_PAGE } from '@/constants';
import { PATH } from '@/constants/routerLinks';

import { StyledLoginForm } from './style';

const LoginPage = () => {
  const {
    TITLE,
    PHONE,
    PASSWORD,
    LOGIN,
    SIGN_UP,
  } = LOGIN_PAGE;

  const { register, handleSubmit } = useForm();

  const onSubmit = (data:unknown) => {
    console.log(data);
  };
  return (
    <Container>
      <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
        <img src={TwitterLogo} alt="twitter" title="twitter" />
        <Title weight="900" size="42px">{TITLE}</Title>
        <Input height="70" placeholder={PHONE} {...register('phone')} />
        <Input height="70" type="password" placeholder={PASSWORD} {...register('password')} />
        <Button
          width="100%"
          height="62px"
          background={COLOR.primary}
          color={COLOR.light}
          borderRadius={BORDER_RADIUS.xl}
          fontSize={FONT_SIZE.xl}
          onClick={() => console.log(123)}
        >
          {LOGIN}
        </Button>
        <LinkApp to={PATH.SIGN_UP_PAGE} marginLeft="70%">
          {SIGN_UP }
        </LinkApp>
      </StyledLoginForm>
    </Container>
  );
};

export default LoginPage;
