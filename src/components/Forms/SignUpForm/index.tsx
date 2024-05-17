import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FirestoreError } from 'firebase/firestore';

import { Button } from '@/components/ui-components/Button';
import { ButtonStyled2 } from '@/components/ui-components/Button/config';
import { Input } from '@/components/ui-components/Input';
import {
  EmailInputConfig, NameInputConfig, PasswordInputConfig, PhoneInputConfig,
} from '@/components/ui-components/Input/config';
import { LinkApp } from '@/components/ui-components/Link';
import { Loader } from '@/components/ui-components/Loader';
import { Select } from '@/components/ui-components/Select';
import { Title } from '@/components/ui-components/Title';
import { Toast } from '@/components/ui-components/Toast';
import { SIGN_UP_FORM } from '@/constants/pages/forms';
import { PATH } from '@/constants/routerLinks';
import { getDays, getMonths, getYears } from '@/helpers/getDate';
import { useToast } from '@/hooks/useToast';
import { createAccountWithEmail } from '@/services/auth/createUserWithEmail';
import { UserTypes } from '@/types/user';
import { convertToTimestamp } from '@/utils/date';

import { ContentDescription, SelectWrapper, StyledSignUpForm } from './styles';

export const SignUpForm = () => {
  const {
    NEXT,
    DATE_BIRTH,
    TO_LOGIN,
    DESCRIPTION,
  } = SIGN_UP_FORM;

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
        date_created: convertToTimestamp(
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
      if (((error as FirestoreError).code as string) === 'auth/email-already-in-use') {
        showToast('This email already exists', 'error');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleYearChange = (e: { target: { value: string; }; }) => {
    setYear(parseFloat(e.target.value));
  };

  const handleMonthChange = (e: { target: { value: string; }; }) => {
    setYear(parseFloat(e.target.value));
  };

  const handleDayChange = (e: { target: { value: string; }; }) => {
    setYear(parseFloat(e.target.value));
  };

  return (
    <>
      <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          control={control}
          {...NameInputConfig}
          disabled={isLoading}
        />
        <Input
          control={control}
          {...PhoneInputConfig}
          disabled={isLoading}
        />
        <Input
          control={control}
          {...EmailInputConfig}
          disabled={isLoading}
        />
        <Input
          control={control}
          {...PasswordInputConfig}
          disabled={isLoading}
        />
        <LinkApp to={PATH.LOG_IN_PAGE}>{TO_LOGIN}</LinkApp>
        <Title row="xs">{DATE_BIRTH}</Title>
        <ContentDescription>
          {DESCRIPTION}
        </ContentDescription>
        <SelectWrapper>
          <Select
            name="year"
            options={arrayYears}
            onChange={handleYearChange}
            placeholder="Year"
          />
          <Select
            name="month"
            options={arrayMonth}
            placeholder="Month"
            onChange={handleMonthChange}
          />
          <Select
            name="day"
            options={arrayDays}
            onChange={handleDayChange}
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
      { visible && <Toast text={text} type={type} dataTestId="toast" /> }
    </>
  );
};
