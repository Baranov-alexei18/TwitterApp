import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Container } from '@/assets/style/global';
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/assets/style/variables';
import TwitterLogo from '@/assets/svg/twitter-logo.svg';
import { Button } from '@/components/ui-components/Button';
import { Input } from '@/components/ui-components/Input';
import { LinkApp } from '@/components/ui-components/Link';
import { Loader } from '@/components/ui-components/Loader';
import { Title } from '@/components/ui-components/Title';
import { LOGIN_PAGE } from '@/constants';
import { PATH } from '@/constants/routerLinks';
import { LoginToAccount } from '@/services/firebase/auth';

import { StyledLoginForm, WrapperLink } from './style';

const LoginPage = () => {
  const {
    TITLE,
    EMAIL,
    PASSWORD,
    LOGIN,
    SIGN_UP,
  } = LOGIN_PAGE;

  const { control, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: object) => {
    setIsLoading(true);
    try {
      await LoginToAccount(data);
    } catch (error) {
      throw new Error(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
        <img src={TwitterLogo} alt="twitter" title="twitter" />
        <Title weight="900" size="42px">{TITLE}</Title>
        <Input
          control={control}
          name="email"
          placeholder={EMAIL}
        />
        <Input
          control={control}
          name="password"
          type="password"
          placeholder={PASSWORD}
        />
        <Button
          background={COLOR.primary}
          color={COLOR.light}
          borderRadius={BORDER_RADIUS.xl}
          fontSize={FONT_SIZE.xl}
          onClick={() => console.log(123)}
        >
          {isLoading ? <Loader /> : LOGIN}
        </Button>
        <WrapperLink>
          <LinkApp to={PATH.SIGN_UP_PAGE}>
            {SIGN_UP}
          </LinkApp>
        </WrapperLink>
      </StyledLoginForm>
    </Container>
  );
};

export default LoginPage;
