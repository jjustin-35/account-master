import { InputWrapper, Label, Input } from './styled';

export interface InputType {
  label: string;
  name: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  value?: string;
  inputRef?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  label,
  name,
  type,
  placeholder,
  value,
  inputRef,
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
        ref={(node: HTMLInputElement) => (inputRef.current[name] = node)}
      />
    </InputWrapper>
  );
};

export default InputField;
