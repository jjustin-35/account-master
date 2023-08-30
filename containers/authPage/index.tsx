'use client';

import React, { useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
// import { signIn } from 'next-auth/react';
// import { useDispatch } from 'react-redux';

import { UserType } from '@/constants/types/modal';

// import { postSignup as postSignupAction } from '@/redux/sagaActions/auth';
import authValidation from '@/helpers/authValidation';

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

type ErrorStateType = {
  [key in TabType]?: ErrorsType;
};

const AuthPageContainer = ({ providers }: Props) => {
  const searchParams = useSearchParams();
  const isSignUp = !!searchParams.get('isSignUp');
  const initTab = isSignUp ? 'signUp' : 'signIn';
  const initErrors = { signIn: {}, signUp: {} } as ErrorStateType;

  const [activeTab, setActiveTab] = useState<TabType>(initTab);
  const [errors, setErrors] = useState<ErrorStateType>(initErrors);
  const data: FormType = dataset[activeTab];
  const formRef = useRef<HTMLFormElement>(null);
  const tabs = Object.values(dataset).map((data) => data.tab);
  // const dispatch = useDispatch();
  // const postSignup = (data: UserType) => dispatch(postSignupAction(data));

  const clickHandler = (id: string) => {
    setActiveTab(id as TabType);
  };

  const submitHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    const errors = authValidation(data as FormDataType);
    const hasErrors = Object.values(errors).some((error) => error);

    if (hasErrors) {
      setErrors({ [activeTab]: errors });
      return;
    }

    console.log('data', data);

    // if (activeTab === 'signIn') {
    //   signIn('credentials', data);
    //   return;
    // }

    // if (activeTab === 'signUp') {
    //   postSignup(data as UserType);
    //   return;
    // }

    return;
  };

  return (
    <>
      <AuthBanner />
      <AuthForm
        authProviders={providers}
        activeTab={activeTab}
        formRef={formRef}
        errors={errors[activeTab]}
        data={data}
        tabs={tabs}
        clickHandler={clickHandler}
        submitHandler={submitHandler}
      />
    </>
  );
};

export default AuthPageContainer;
