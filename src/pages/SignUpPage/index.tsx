import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import TwitterLogo from '@/assets/image/icons/twitter-logo.svg';
import { getDays, getMonths, getYears } from '@/components/helpers/getDate';
import { Button } from '@/components/ui-components/Button';
import { ButtonStyled2 } from '@/components/ui-components/Button/config';
import { ContentText } from '@/components/ui-components/ContentText';
import { Input } from '@/components/ui-components/Input';
import { LinkApp } from '@/components/ui-components/Link';
import { Loader } from '@/components/ui-components/Loader';
import { Select } from '@/components/ui-components/Select';
import { Title } from '@/components/ui-components/Title';
import { Toast } from '@/components/ui-components/Toast';
import { INPUT_FORM_NAMES, SIGN_UP_FORM } from '@/constants/pages/forms';
import { PATH } from '@/constants/routerLinks';
import { useAuthToken } from '@/hooks/useAuthToken';
import { useToast } from '@/hooks/useToast';
import { createAccountWithEmail } from '@/services/auth/createUserWithEmail';
import { Container } from '@/theme/global';
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/theme/variables';
import { UserTypes } from '@/types/user';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { maskForPhone } from '@/utils/mask/maskForPhone';

import {
  EmailValidate, NameValidate, PasswordValidate, PhoneValidate,
} from './options';
import { ImageDiv, SelectWrapper, StyledSignUpForm } from './styles';

const SignUpPage = () => {
  const {
    TITLE,
    NEXT,
    DATE_BIRTH,
    TO_LOGIN,
    DESCRIPTION,
  } = SIGN_UP_FORM;
  const {
    PASSWORD, NAME, PHONE, EMAIL,
  } = INPUT_FORM_NAMES;
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [day, setDay] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit } = useForm();

  const arrayYears = useMemo(() => getYears(), []);
  const arrayMonth = useMemo(() => getMonths(year), [year]);
  const arrayDays = useMemo(() => getDays(year, month), [year, month]);

  const {
    showToast, visible, text, type,
  } = useToast();
  const navigate = useNavigate();

  const onSubmit = async (data: Partial<UserTypes>) => {
    setIsLoading(true);
    try {
      const newUser = {
        ...data,
        date_created: new Date(
          year ?? new Date().getFullYear(),
          month ?? new Date().getMonth(),
          day ?? new Date().getDate(),
        ),
      };
      const userData = await createAccountWithEmail(newUser as UserTypes);

      if (userData) {
        navigate(PATH.LOG_IN_PAGE);
      }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        showToast('This email already exists', 'error');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
        <ImageDiv>
          <img src={TwitterLogo} alt="twitter" title="twitter" />
        </ImageDiv>
        <Title row="sm">{TITLE}</Title>
        <Input
          control={control}
          name={NAME}
          type="text"
          rules={NameValidate}
          placeholder={capitalizeFirstLetter(NAME)}
          disabled={isLoading}
        />
        <Input
          control={control}
          name={PHONE}
          rules={PhoneValidate}
          placeholder={capitalizeFirstLetter(PHONE)}
          mask={maskForPhone}
          disabled={isLoading}
        />
        <Input
          control={control}
          name={EMAIL}
          rules={EmailValidate}
          placeholder={capitalizeFirstLetter(EMAIL)}
          disabled={isLoading}
        />
        <Input
          control={control}
          name={PASSWORD}
          type={PASSWORD}
          rules={PasswordValidate}
          placeholder={capitalizeFirstLetter(PASSWORD)}
          disabled={isLoading}
        />
        <LinkApp to={PATH.LOG_IN_PAGE}>{TO_LOGIN}</LinkApp>
        <Title row="xs">{DATE_BIRTH}</Title>
        <ContentText
          size={FONT_SIZE.sm}
          color={COLOR.darkGrey}
        >
          {DESCRIPTION}
        </ContentText>
        <SelectWrapper>
          <Select
            options={arrayYears}
            onChange={(e) => setYear(parseFloat(e.target.value))}
            placeholder="Year"
          />
          <Select
            options={arrayMonth}
            placeholder="Month"
            onChange={(e) => setMonth(parseFloat(e.target.value))}
          />
          <Select
            options={arrayDays}
            onChange={(e) => setDay(parseFloat(e.target.value))}
            placeholder="Day"
          />
        </SelectWrapper>
        <Button
          type="submit"
          {...ButtonStyled2}
        >
          {isLoading ? <Loader /> : NEXT}
        </Button>
      </StyledSignUpForm>
      {visible && <Toast text={text} type={type} dataTestId="toast" />}
    </Container>
  );
};

export default SignUpPage;
