import { useState } from 'react';

import { inputValidation } from '@/helpers/authValidation';

import { InputWrapper, Label, Input, ErrorMsg } from './styled';

export interface InputType {
  label: string;
  name: string;
  type: 'text' | 'email' | 'password' | 'number' | 'tel';
  hasError?: boolean;
  errorMsg?: string;
  placeholder?: string;
  value?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  isRequired?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const InputField = ({
  label,
  name,
  type,
  hasError,
  errorMsg,
  placeholder,
  value,
  isRequired,
  inputRef,
  onChange,
  onFocus,
  onBlur,
}: InputType) => {
  const [error, setError] = useState(errorMsg);
  const [isError, setIsError] = useState(hasError);

  console.log('error', error);
  console.log('isError', isError);

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) return onBlur(e);

    const { value } = e.target;

    const error = inputValidation(value);
    if (error) {
      setError(error);
      setIsError(true);
      return;
    }

    setError('');
    setIsError(false);
    return;
  };

  return (
    <InputWrapper>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        required={isRequired}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={blurHandler}
        ref={inputRef}
      />
      {isError && error && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </InputWrapper>
  );
};

export default InputField;
