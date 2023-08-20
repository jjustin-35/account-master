import { InputDataType } from '@/containers/authPage';

import { InputWrapper, Label, Input, ErrorMsg } from './styled';
import { useEffect, useState } from 'react';

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
  formDataHandler?: (input: InputDataType) => void;
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
  formDataHandler,
  onChange,
  onFocus,
  onBlur,
}: InputType) => {
  const [inputData, setInputData] = useState({} as InputDataType);

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value, required } = e.target;
    setInputData({ name, value, isRequired: required });
    onBlur && onBlur(e);
  };

  useEffect(() => {
    if (!formDataHandler) return;
    if (hasError) return;
    formDataHandler(inputData);
  }, [inputData]);

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
      {hasError && errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </InputWrapper>
  );
};

export default InputField;
