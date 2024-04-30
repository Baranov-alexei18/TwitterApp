export const MaxLengthValidate = (num: number) => ({
  maxLength: {
    value: num,
    message: `This field support no more ${num} symbols`,
  },
});

const MinLengthValidate = (num: number) => ({
  minLength: {
    value: num,
    message: `This field should contain more ${num} symbols`,
  },
});

export const RequaredValidate = {
  required: {
    value: true,
    message: 'This field is required',
  },
};

export const NameValidate = {
  ...RequaredValidate,
  ...MinLengthValidate(4),
  ...MaxLengthValidate(20),
};

export const PhoneValidate = {
  ...RequaredValidate,
  pattern: {
    value: /^\+375 \(\d{2}\) \d{3}-\d{2}-\d{2}$/,
    message: 'Invalid phone. For example: +375 (XX) XXX-XX-XX',
  },
};

export const EmailValidate = {
  ...RequaredValidate,
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Invalid email. For example: test@test.ru',
  },
};

export const PasswordValidate = {
  ...RequaredValidate,
  ...MinLengthValidate(6),
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
    message: 'Password mast contain minimum 1 special character(@,$,!,%,*,#,?,&), 1 number and 1 letter ',
  },
};
