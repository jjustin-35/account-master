import { InputWrapper, Label, Input, ErrorMsg } from './styled';

export interface InputType {
  label: string;
  name: string;
  type: 'text' | 'email' | 'password' | 'number' | 'tel';
  errorMsg?: string;
  placeholder?: string;
  value?: string;
  isRequired?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  label,
  name,
  type,
  errorMsg,
  placeholder,
  value,
  isRequired,
  onChange,
}: InputType) => {
  return (
    <InputWrapper>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={isRequired}
      />
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </InputWrapper>
  );
};

export default InputField;
