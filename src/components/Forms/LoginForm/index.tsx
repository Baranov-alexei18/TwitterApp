import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import TwitterLogo from '@/assets/image/icons/twitter-logo.svg';
import { INPUT_FORM_NAMES, LOGIN_FORM } from '@/constants/pages/forms';
import { PATH } from '@/constants/routerLinks';
import { useToast } from '@/hooks/useToast';
import { StyledLoginForm } from '@/pages/LoginPage/styles';
import { LoginToAccount } from '@/services/auth/loginToAccount';
import { setUser } from '@/store/sliceUser';
import { UserTypes } from '@/types/user';
import { Button } from '@/ui-components/Button';
import { ButtonStyled2 } from '@/ui-components/Button/config';
import { Icon } from '@/ui-components/Icon';
import { StyledIcon40 } from '@/ui-components/Icon/config';
import { Input } from '@/ui-components/Input';
import { Loader } from '@/ui-components/Loader';
import { Title } from '@/ui-components/Title';
import { Toast } from '@/ui-components/Toast';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';

export const LoginPageForm = () => {
  const { TITLE, LOGIN } = LOGIN_FORM;
  const { PASSWORD, EMAIL } = INPUT_FORM_NAMES;

  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit } = useForm();
  const {
    showToast, visible, text, type,
  } = useToast();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: Partial<UserTypes>) => {
    setIsLoading(true);
    try {
      const user = await LoginToAccount(data);

      if (user) {
        showToast('Login success', 'success');
        dispatch(setUser({ ...user }));
        navigate(PATH.HOME_PAGE);
      }
    } catch (error) {
      throw new Error(error as string);
    } finally {
      showToast('Email or password incorrect', 'error');
      setIsLoading(false);
    }
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      <Icon src={TwitterLogo} alt="twitter" {...StyledIcon40} />
      <Title row="md">{TITLE}</Title>
      <Input
        control={control}
        name={EMAIL}
        placeholder={capitalizeFirstLetter(EMAIL)}
      />
      <Input
        control={control}
        name={PASSWORD}
        type={PASSWORD}
        placeholder={capitalizeFirstLetter(PASSWORD)}
      />
      <Button {...ButtonStyled2}>
        {isLoading ? <Loader /> : LOGIN}
      </Button>
      {visible && <Toast text={text} type={type} dataTestId="toast" />}
    </StyledLoginForm>
  );
};
