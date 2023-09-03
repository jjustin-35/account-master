'use client';

import { useEffect, useState, useRef } from 'react';

import { InputType } from '@/components/fields/input';

import { emailValidation } from '@/helpers/authValidation';
import InputField from '@/components/fields/input';

interface Props {
  inputData: InputType;
  hasError: boolean;
}

const EmailField = ({ inputData, hasError }: Props) => {
  const { type } = inputData;
  if (type !== 'email') return null;

  const [error, setError] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const error = emailValidation(value);
    if (error) {
      setError(error);
      return;
    }

    setError('');
    return;
  };

  useEffect(() => {
    if (hasError) {
      const input = emailRef.current;
      const error = emailValidation(input.value);
      if (error) {
        setError(error);
        return;
      }
      setError('');
      return;
    }
  }, [hasError]);

  return (
    <InputField
      {...inputData}
      errorMsg={error}
      hasError={!!error}
      onBlur={blurHandler}
      inputRef={emailRef}
    />
  );
};

export default EmailField;
