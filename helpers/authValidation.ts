import * as errorMsgs from '../constants/errorMsg';

type FormDataType = Record<string, string>;

export const emailValidation = (value: string) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!value) {
    return errorMsgs.REQUIRE_AUTH_DATA;
  }

  if (!emailRegex.test(value)) {
    return errorMsgs.INVALID_EMAIL;
  }

  return null;
};

export const passwordValidation = (value: string) => {
  if (!value) {
    return errorMsgs.REQUIRE_AUTH_DATA;
  }

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  const isValidate = passwordRegex.test(value);

  if (!isValidate) {
    return errorMsgs.INVALID_PASSWORD;
  }

  return null;
};

export const confirmPasswordValidation = (value: string, password: string) => {
  if (!value) {
    return errorMsgs.REQUIRE_CONFIRM_PASSWORD;
  }

  if (value !== password) {
    return errorMsgs.INVALID_CONFIRM_PASSWORD;
  }

  return null;
};

export const inputValidation = (value?: string) => {
  if (!value) {
    return errorMsgs.REQUIRE_VALUE;
  }

  return null;
};

const authValidation = (data: FormDataType) => {
  const { email, password, confirmPassword, ...anothers } = data;
  const anothersErrors = Object.keys(anothers).reduce(
    (acc, key) => ({
      ...acc,
      [key]: inputValidation(anothers[key]),
    }),
    {},
  );

  const errors = {
    ...anothersErrors,
    email: emailValidation(email),
    password: passwordValidation(password),
    confirmPassword: confirmPasswordValidation(confirmPassword, password),
  };

  return errors;
};

export default authValidation;
