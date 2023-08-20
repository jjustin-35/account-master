'use client';

import { InputDataType } from '@/containers/authPage';
import InputField, { InputType } from '@/components/fields/input';

interface Props {
  inputData: InputType;
  formDataHandler: (input: InputDataType) => void;
}

const UsernameField = ({ inputData, formDataHandler }: Props) => {
  return <InputField {...inputData} formDataHandler={formDataHandler} />;
};

export default UsernameField;
