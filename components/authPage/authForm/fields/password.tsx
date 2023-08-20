'use client';

import { useState } from 'react';

import { InputType } from '@/components/fields/input';
import { InputDataType } from '@/containers/authPage';

import {
  passwordValidation,
  confirmPasswordValidation,
} from '@/helpers/authValidation';
import InputField from '@/components/fields/input';

interface Props {
  isSignIn: boolean;
  inputData: InputType;
  formDataHandler: (input: InputDataType) => void;
}

const confirmPassword: InputType = {
  label: '確認密碼',
  name: 'confirmPassword',
  type: 'password',
  placeholder: '請再次輸入密碼',
  isRequired: true,
};

const PasswordField = ({ isSignIn, inputData, formDataHandler }: Props) => {
  const { name } = inputData;
  const isPassword = name === 'password';
  if (!isPassword) return null;

  const [errors, setErrors] = useState({});
  const [password, setPassword] = useState('');
  const hasError = Object.values(errors).some((error) => error);

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'password') {
      const error = passwordValidation(value);
      if (error) return setErrors({ [name]: error });

      setErrors({ [name]: null });
      setPassword(value);
    }

    if (name === 'confirmPassword') {
      const error = confirmPasswordValidation(value, password);
      if (error) return setErrors({ [name]: error });

      setErrors({ [name]: null });
    }

    return;
  };

  return (
    <>
      <InputField
        {...inputData}
        hasError={hasError}
        errorMsg={errors[inputData.name]}
        onBlur={blurHandler}
        formDataHandler={formDataHandler}
      />
      {!isSignIn && (
        <InputField
          {...confirmPassword}
          hasError={hasError}
          errorMsg={errors[confirmPassword.name]}
          onBlur={blurHandler}
          formDataHandler={formDataHandler}
        />
      )}
    </>
  );
};

export default PasswordField;