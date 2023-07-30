import React from 'react';

import { FormRefType } from '@/helpers/getFormData';

import AuthBanner from './authBanner';
import AuthForm from './authForm';

interface Props {
  authProviders: any;
  activeTab: string;
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
