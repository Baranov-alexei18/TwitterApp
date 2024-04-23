import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '@/assets/style/global';
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/assets/style/variables';
import TwitterLogo from '@/assets/svg/twitter-logo.svg';
import { getDays, getMonths, getYears } from '@/components/helpers/getDate';
import { Button } from '@/components/ui-components/Button';
import { ContentText } from '@/components/ui-components/ContentText';
import { Input } from '@/components/ui-components/Input';
import { LinkApp } from '@/components/ui-components/Link';
import { Loader } from '@/components/ui-components/Loader';
import { Select } from '@/components/ui-components/Select';
import { Title } from '@/components/ui-components/Title';
import { SIGN_UP_PAGE } from '@/constants';
import { PATH } from '@/constants/routerLinks';
import { createAccountWithEmail } from '@/services/auth/createUserWithEmail';
import { maskForPhone } from '@/utils/mask/maskForPhone';

import {
  EmailValidate, NameValidate, PasswordValidate, PhoneValidate,
} from './options';
import { ImageDiv, SelectWrapper, StyledSignUpForm } from './style';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const {
    TITLE,
    PHONE,
    PASSWORD,
    EMAIL,
    NEXT,
    DATE_BIRTH,
    NAME,
    TO_LOGIN,
    DESCRIPTION,
  } = SIGN_UP_PAGE;

  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [day, setDay] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit } = useForm();

  const arrayYears = useMemo(() => getYears(), []);
  const arrayMonth = useMemo(() => getMonths(year), [year]);
  const arrayDays = useMemo(() => getDays(year, month), [year, month]);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: object) => {
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
      await createAccountWithEmail(newUser, dispatch);
      navigate('/feed');
    } catch (error) {
      console.error('Error creating account:', error);
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
        <Title weight="700" size="30px">{TITLE}</Title>
        <Input
          control={control}
          name="name"
          type="text"
          placeholder={NAME}
          rules={NameValidate}
          disabled={isLoading}
        />
        <Input
          control={control}
          name="phone"
          placeholder={PHONE}
          rules={PhoneValidate}
          mask={maskForPhone}
          disabled={isLoading}
        />
        <Input
          control={control}
          name="email"
          placeholder={EMAIL}
          rules={EmailValidate}
          disabled={isLoading}
        />
        <Input
          control={control}
          name="password"
          rules={PasswordValidate}
          type="password"
          placeholder={PASSWORD}
          disabled={isLoading}
        />
        <LinkApp to={PATH.LOG_IN_PAGE}>{TO_LOGIN}</LinkApp>
        <Title weight="700" size={FONT_SIZE.md}>{DATE_BIRTH}</Title>
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
          background={COLOR.primary}
          color={COLOR.light}
          borderRadius={BORDER_RADIUS.xl}
          fontSize={FONT_SIZE.xl}
        >
          {isLoading ? <Loader /> : NEXT}
        </Button>
        {user?.data?.uid || '123'}
      </StyledSignUpForm>
    </Container>
  );
};

export default SignUpPage;
