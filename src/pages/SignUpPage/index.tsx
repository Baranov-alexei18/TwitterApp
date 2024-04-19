import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Container } from '@/assets/style/global';
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/assets/style/variables';
import TwitterLogo from '@/assets/svg/twitter-logo.svg';
import { getDays, getMonths, getYears } from '@/components/helpers/getDate';
import { Button } from '@/components/ui-components/Button';
import { ContentText } from '@/components/ui-components/ContentText';
import { Input } from '@/components/ui-components/Input';
import { LinkApp } from '@/components/ui-components/Link';
import { Select } from '@/components/ui-components/Select';
import { Title } from '@/components/ui-components/Title';
import { SIGN_UP_PAGE } from '@/constants';
import { PATH } from '@/constants/routerLinks';

import { ImageDiv, SelectWrapper, StyledSignUpForm } from './style';

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

  const { register, handleSubmit, formState: { errors } } = useForm();

  const arrayYears = useMemo(() => getYears(), []);
  const arrayMonth = useMemo(() => getMonths(year), [year]);
  const arrayDays = useMemo(() => getDays(year, month), [year, month]);

  const onSubmit = (data: object) => {
    const newUser = {
      ...data,
      date_created: new Date(
        year ?? new Date().getFullYear(),
        month ?? new Date().getMonth(),
        day ?? new Date().getDate(),
      ),
    };
    console.log(newUser);
  };

  return (
    <Container>
      <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
        <ImageDiv>
          <img src={TwitterLogo} alt="twitter" title="twitter" />
        </ImageDiv>
        <Title weight="700" size="30px">{TITLE}</Title>
        <Input
          name="Name"
          placeholder={NAME}
          register={register}
          error={!!errors.Name}
          onChange={() => errors.Name && console.log('Error in Name field')}
        />
        <Input
          name="Phone"
          placeholder={PHONE}
          register={register}
          error={!!errors.Phone}
          onChange={() => errors.Phone && console.log('Error in Phone field')}
        />
        <Input
          name="Email"
          placeholder={EMAIL}
          register={register}
          error={!!errors.Email}
          onChange={() => errors.Email && console.log('Error in Email field')}
        />
        <Input
          type="password"
          name="Password"
          placeholder={PASSWORD}
          register={register}
          error={!!errors.Password}
          onChange={() => errors.Password && console.log('Error in Password field')}
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
          {NEXT}
        </Button>
      </StyledSignUpForm>
    </Container>
  );
};

export default SignUpPage;
