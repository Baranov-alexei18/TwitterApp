import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import TwitterLogo from '@/assets/image/icons/twitter-logo.svg';
import { Button } from '@/components/ui-components/Button';
import { Input } from '@/components/ui-components/Input';
import { LinkApp } from '@/components/ui-components/Link';
import { Loader } from '@/components/ui-components/Loader';
import { Title } from '@/components/ui-components/Title';
import { LOGIN_PAGE } from '@/constants';
import { PATH } from '@/constants/routerLinks';
import { LoginToAccount } from '@/services/auth/loginToAccount';
import { Container } from '@/theme/global';
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/theme/variables';
import { UserTypes } from '@/types/user';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: Partial<UserTypes>) => {
    setIsLoading(true);
    try {
      await LoginToAccount(data, dispatch);
      navigate(PATH.HOME_PAGE);
    } catch (error) {
      throw new Error(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
        <img src={TwitterLogo} alt="twitter-logo" title="twitter" />
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
