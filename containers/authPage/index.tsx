'use client';

import React, { useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useDispatch } from 'react-redux';

import { UserType } from '@/constants/types/modal';

import { postSignup as postSignupAction } from '@/redux/sagaActions/auth';
import authValidation from '@/helpers/authValidation';

import AuthPageContent from '@/components/authPage';
import dataset, { FormType } from './data';

interface Props {
  providers: any;
}

interface FormDataType extends UserType {
  [key: string]: string;
}

export type ErrorsType = ReturnType<typeof authValidation>;

const AuthPageContainer = ({ providers }: Props) => {
  const searchParams = useSearchParams();
  const isSignUp = !!searchParams.get('isSignUp');
  const initTab = isSignUp ? 'signUp' : 'signIn';

  const [activeTab, setActiveTab] = useState(initTab);
  const [errors, setErrors] = useState<ErrorsType>(null);
  const data: FormType = dataset[activeTab];
  const formRef = useRef<HTMLFormElement>(null);
  const tabs = Object.values(dataset).map((data) => data.tab);
  const dispatch = useDispatch();
  const postSignup = (data: UserType) => dispatch(postSignupAction(data));

  const clickHandler = (id: string) => {
    setActiveTab(id);
  };

  const submitHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    const formData = new FormData(formRef.current as HTMLFormElement);
    const data = Object.fromEntries(formData.entries()) as FormDataType;
    const errors = authValidation(data);
    const hasErrors = Object.values(errors).some((error) => error);

    if (hasErrors) {
      setErrors(errors);
      return;
    }

    if (activeTab === 'signIn') {
      signIn('credentials', data);
      return;
    }

    if (activeTab === 'signUp') {
      postSignup(data as UserType);
      return;
    }

    return;
  };

  return (
    <AuthPageContent
      authProviders={providers}
      activeTab={activeTab}
      formRef={formRef}
      data={data}
      tabs={tabs}
      errors={errors}
      clickHandler={clickHandler}
      submitHandler={submitHandler}
    />
  );
};

export default AuthPageContainer;
