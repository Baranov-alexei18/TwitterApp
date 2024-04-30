import { MAX_CHARACTERS_TEXTAREA } from '@/constants';
import { INPUT_FORM_NAMES } from '@/constants/pages/forms';
import {
  EmailValidate, MaxLengthValidate, NameValidate, PasswordValidate, PhoneValidate,
} from '@/pages/SignUpPage/options';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { maskForPhone } from '@/utils/mask/maskForPhone';

export const NameInputConfig = {
  name: INPUT_FORM_NAMES.NAME,
  type: 'text',
  rules: NameValidate,
  placeholder: capitalizeFirstLetter(INPUT_FORM_NAMES.NAME),
};

export const DescriptionInputConfig = {
  name: INPUT_FORM_NAMES.DESC,
  type: 'text',
  rules: MaxLengthValidate(MAX_CHARACTERS_TEXTAREA),
  placeholder: capitalizeFirstLetter(INPUT_FORM_NAMES.DESC),
};

export const PhoneInputConfig = {
  name: INPUT_FORM_NAMES.PHONE,
  type: 'text',
  rules: PhoneValidate,
  mask: maskForPhone,
  placeholder: capitalizeFirstLetter(INPUT_FORM_NAMES.PHONE),
};

export const EmailInputConfig = {
  name: INPUT_FORM_NAMES.EMAIL,
  type: 'text',
  rules: EmailValidate,
  placeholder: capitalizeFirstLetter(INPUT_FORM_NAMES.EMAIL),
};

export const PasswordInputConfig = {
  name: INPUT_FORM_NAMES.PASSWORD,
  type: INPUT_FORM_NAMES.PASSWORD,
  rules: PasswordValidate,
  placeholder: capitalizeFirstLetter(INPUT_FORM_NAMES.PASSWORD),
};

export const PasswordUpdateInputConfig = {
  name: `${INPUT_FORM_NAMES.PASSWORD}_confirm`,
  type: INPUT_FORM_NAMES.PASSWORD,
  placeholder: `${capitalizeFirstLetter(INPUT_FORM_NAMES.PASSWORD)} confirm`,
};
