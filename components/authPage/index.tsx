import React, { useRef } from 'react';

import { FormType } from '@/containers/authPage/data';
import { ErrorsType } from '@/containers/authPage';

import AuthBanner from './authBanner';
import AuthForm from './authForm';
import { ButtonType } from '@/constants/types/global';

type FormRefType = ReturnType<typeof useRef<HTMLFormElement>>;
interface Props {
  authProviders: any;
  activeTab: string;
  data: FormType;
  tabs: ButtonType[];
  errors: ErrorsType;
  formRef: FormRefType;
  clickHandler: (id: string) => void;
  submitHandler: (e: React.MouseEvent) => void;
}

const AuthPageContent = (props: Props) => (
  <>
    <AuthBanner />
    <AuthForm {...props} />
  </>
);

export default AuthPageContent;
