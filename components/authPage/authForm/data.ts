import { TypographyType, ButtonType } from '@/constants/types/global';
import { InputType } from '@/components/fields/input';

type FormType = {
  title: {
    text: string;
  } & TypographyType;
  inputs: InputType[];
};

type DataType = {
  tabs: ButtonType[];
  signIn: FormType;
  signUp: FormType;
};

const data: DataType = {
  tabs: [
    {
      text: '登入',
      id: 'signIn',
      size: 'medium',
      round: 'pill',
      btnTheme: 'primary',
    },
    {
      text: '註冊',
      id: 'signUp',
      size: 'medium',
      round: 'pill',
      btnTheme: 'primary',
    },
  ],
  signIn: {
    title: {
      text: '登入',
      textAlign: 'center',
    },
    inputs: [
      {
        name: 'email',
        label: '信箱',
        type: 'email',
        placeholder: '請輸入信箱',
      },
      {
        name: 'password',
        label: '密碼',
        type: 'password',
        placeholder: '請輸入密碼',
      },
    ],
  },
  signUp: {
    title: {
      text: '註冊',
      textAlign: 'center',
    },
    inputs: [
      {
        name: 'name',
        label: '姓名',
        type: 'text',
        placeholder: '請輸入姓名',
      },
      {
        name: 'email',
        label: '信箱',
        type: 'email',
        placeholder: '請輸入信箱',
      },
      {
        name: 'password',
        label: '密碼',
        type: 'password',
        placeholder: '請輸入密碼',
      },
      {
        name: 'confirmPassword',
        label: '確認密碼',
        type: 'password',
        placeholder: '請再次輸入密碼',
      },
    ],
  },
};

export default data;
