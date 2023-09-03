'use client';

import { useEffect, useState } from 'react';

import { inputValidation } from '@/helpers/authValidation';
import InputField, { InputType } from '@/components/fields/input';

interface Props {
  inputData: InputType;
  hasError: boolean;
}

const UsernameField = ({ inputData, hasError }: Props) => {
  const { name } = inputData;
  if (name !== 'username') return null;

  const [error, setError] = useState('');

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const error = inputValidation(value);

    if (error) {
      setError(error);
      return;
    }

    setError('');
    return;
  };

  useEffect(() => {
    if (hasError) {
      const error = inputValidation(inputData.value);
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
      hasError={!!error}
      errorMsg={error}
      onBlur={blurHandler}
    />
  );
};

export default UsernameField;
