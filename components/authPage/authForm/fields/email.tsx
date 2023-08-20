'use client';

import { useState } from 'react';

import { InputType } from '@/components/fields/input';
import { InputDataType } from '@/containers/authPage';

import { emailValidation } from '@/helpers/authValidation';
import InputField from '@/components/fields/input';

interface Props {
  inputData: InputType;
  formDataHandler: (input: InputDataType) => void;
}

const EmailField = ({ inputData, formDataHandler }: Props) => {
  const { type, name } = inputData;
  if (type !== 'email') return null;

  const [errors, setErrors] = useState({} as Record<string, string>);
  const hasError = Object.values(errors).some((error) => error);

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const error = emailValidation(value);
    if (error) return setErrors({ [name]: error });

    setErrors({ [name]: null });
    return;
  };

  return (
    <InputField
      {...inputData}
      errorMsg={errors[name]}
      hasError={hasError}
      onBlur={blurHandler}
      formDataHandler={formDataHandler}
    />
  );
};

export default EmailField;
