'use client';

import { useEffect, useState } from 'react';

import { InputType } from '@/components/fields/input';
import { ErrorsType } from '@/containers/authPage';

import { emailValidation } from '@/helpers/authValidation';
import InputField from '@/components/fields/input';

interface Props {
  inputData: InputType;
  error?: string;
}

const EmailField = ({ inputData, error }: Props) => {
  const { type, name } = inputData;
  if (type !== 'email') return null;

  const [errors, setErrors] = useState({ [name]: error } as ErrorsType);
  const [hasError, setHasError] = useState(false);

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log('blurHandler');
    const { name, value } = e.target;

    const error = emailValidation(value);
    console.log('error validation', error);
    if (error) {
      setErrors({ [name]: error });
      console.log('setErrors', errors);
      setHasError(true);
      return;
    }

    setErrors({ [name]: null });
    setHasError(false);
    return;
  };

  useEffect(() => {
    console.log('email error', error);
    console.log('email hasError', hasError);
  }, [error, hasError]);

  return (
    <InputField
      {...inputData}
      errorMsg={errors[name]}
      hasError={hasError}
      onBlur={blurHandler}
    />
  );
};

export default EmailField;
