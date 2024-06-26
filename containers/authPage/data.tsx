import { TypographyType, ButtonType } from '@/constants/types/global';
import { InputType } from '@/components/fields/input';
import { btnSizes, btnRounds, btnThemes } from '@/constants/uiTypes';

export type FormType = {
  title: {
    text: string;
  } & TypographyType;
  tab: ButtonType;
  inputs: InputType[];
  submit: ButtonType;
};

export type DataType = {
  signIn: FormType;
  signUp: FormType;
};

const data: DataType = {
  signIn: {
    title: {
      text: '登入',
      $textAlign: 'center',
    },
    tab: {
      text: '登入',
      id: 'signIn',
      size: btnSizes.medium,
      round: btnRounds.pill,
      btnTheme: btnThemes.primary,
    },
    inputs: [
      {
        name: 'email',
        label: '信箱',
        type: 'email',
        placeholder: '請輸入信箱',
        isRequired: true,
      },
      {
        name: 'password',
        label: '密碼',
        type: 'password',
        placeholder: '請輸入密碼',
        isRequired: true,
      },
      {
        label: '確認密碼',
        name: 'confirmPassword',
        type: 'password',
        placeholder: '請再次輸入密碼',
        isRequired: true,
      },
    ],
    submit: {
      text: '登入',
      size: btnSizes.medium,
      round: btnRounds.normal,
      btnTheme: btnThemes.primary,
    },
  },
  signUp: {
    title: {
      text: '註冊',
      $textAlign: 'center',
    },
    tab: {
      text: '註冊',
      id: 'signUp',
      size: btnSizes.medium,
      round: btnRounds.pill,
      btnTheme: btnThemes.primary,
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
    submit: {
      text: '註冊',
      size: btnSizes.medium,
      round: btnRounds.normal,
      btnTheme: btnThemes.primary,
    },
  },
};

export default data;
