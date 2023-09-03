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
        onBlur={onBlur}
        ref={inputRef}
      />
      {hasError && errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </InputWrapper>
  );
};

export default InputField;
