import React from 'react';

import { FormRefType } from '@/helpers/getFormData';
import { FormType } from '@/containers/authPage/data';

import AuthBanner from './authBanner';
import AuthForm from './authForm';
import { ButtonType } from '@/constants/types/global';

interface Props {
  authProviders: any;
  activeTab: string;
  data: FormType;
  tabs: ButtonType[];
  inputRef: FormRefType;
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
