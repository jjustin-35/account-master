'use client';

import { useState, useEffect, useRef } from 'react';

import { InputType } from '@/components/fields/input';

import {
  passwordValidation,
  confirmPasswordValidation,
} from '@/helpers/authValidation';
import InputField from '@/components/fields/input';

interface Props {
  isSignIn: boolean;
  inputData: InputType;
  hasError: boolean;
}

const confirmPassword: InputType = {
  label: '確認密碼',
  name: 'confirmPassword',
  type: 'password',
  placeholder: '請再次輸入密碼',
  isRequired: true,
};

const PasswordField = ({ isSignIn, inputData, hasError }: Props) => {
  const { name } = inputData;
  const isPassword = name === 'password';
  if (!isPassword) return null;

  const [passwordErrors, setPasswordErrors] = useState('');
  const [conformPasswordErrors, setConformPasswordErrors] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef<HTMLInputElement>(null);

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'password') {
      const error = passwordValidation(value);
      if (error) return setPasswordErrors(error);

      setPasswordErrors('');
      setPassword(value);
      return;
    }

    if (name === 'confirmPassword' && !isSignIn) {
      const error = confirmPasswordValidation(value, password);
      if (error) return setConformPasswordErrors(error);

      setConformPasswordErrors('');
      return;
    }

    return;
  };

  useEffect(() => {
    const input = passwordRef.current;
    if (hasError) {
      const pwError = passwordValidation(input.value);
      if (pwError) return setPasswordErrors(pwError);
    }

    setPasswordErrors('');
    setPassword(input.value);
  }, [hasError]);

  return (
    <>
      <InputField
        {...inputData}
        hasError={!!passwordErrors}
        errorMsg={passwordErrors}
        onBlur={blurHandler}
        inputRef={passwordRef}
      />
      {!isSignIn && (
        <InputField
          {...confirmPassword}
          hasError={!!conformPasswordErrors}
          errorMsg={conformPasswordErrors}
          onBlur={blurHandler}
        />
      )}
    </>
  );
};

export default PasswordField;
