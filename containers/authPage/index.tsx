'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useDispatch } from 'react-redux';

import { UserType } from '@/constants/types/modal';

import { postSignup as postSignupAction } from '@/redux/sagaActions/auth';
import authValidation from '@/helpers/authValidation';
import formDataHandler from '@/helpers/formDataHandler';

import AuthBanner from '@/components/authPage/authBanner';
import AuthForm from '@/components/authPage/authForm';
import dataset, { FormType } from './data';

interface Props {
  providers: any;
}

type TabType = 'signUp' | 'signIn';

type FormDataType = UserType & Record<string, string>;

export type InputDataType = {
  name: string;
  value: string;
  isRequired?: boolean;
};

export type ErrorsType = Record<string, string | null>;

const AuthPageContainer = ({ providers }: Props) => {
  const searchParams = useSearchParams();
  const isSignUp = !!searchParams.get('isSignUp');
  const initTab = isSignUp ? 'signUp' : 'signIn';

  const [activeTab, setActiveTab] = useState<TabType>(initTab);
  const [errorType, setErrorType] = useState({} as ErrorsType);
  const data: FormType = dataset[activeTab];
  const formRef = useRef<HTMLFormElement>(null);
  const tabs = Object.values(dataset).map((data) => data.tab);
  const dispatch = useDispatch();
  const postSignup = (data: UserType) => dispatch(postSignupAction(data));

  const clickHandler = (id: string) => {
    setActiveTab(id as TabType);
  };

  const submitHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    const formData = formDataHandler(formRef.current);
    const errors = authValidation(formData as FormDataType);
    const hasError = Object.values(errors).some((error) => !!error);

    if (hasError) return setErrorType(errors);

    console.log('formRef', formRef.current);
    console.log('formData', formData);

    if (activeTab === 'signIn') {
      signIn('credentials', formData);
      return;
    }

    if (activeTab === 'signUp') {
      postSignup(formData as UserType);
      return;
    }

    return;
  };

  useEffect(() => {
    setErrorType({});
  }, [activeTab]);

  return (
    <>
      <AuthBanner />
      <AuthForm
        authProviders={providers}
        activeTab={activeTab}
        formRef={formRef}
        errorType={errorType}
        data={data}
        tabs={tabs}
        clickHandler={clickHandler}
        submitHandler={submitHandler}
      />
    </>
  );
};

export default AuthPageContainer;
