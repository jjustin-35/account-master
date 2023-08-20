'use client';

import React, { useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
// import { signIn } from 'next-auth/react';
// import { useDispatch } from 'react-redux';

import { UserType } from '@/constants/types/modal';

// import { postSignup as postSignupAction } from '@/redux/sagaActions/auth';
import authValidation from '@/helpers/authValidation';
import { REQUIRE_AUTH_DATA } from '@/constants/errorMsg';

import AuthBanner from '@/components/authPage/authBanner';
import AuthForm from '@/components/authPage/authForm';
import dataset, { FormType } from './data';

interface Props {
  providers: any;
}

type FormDataType = UserType & Record<string, string>;

export type InputDataType = {
  name: string;
  value: string;
  isRequired?: boolean;
};

export type ErrorsType = ReturnType<typeof authValidation>;

const AuthPageContainer = ({ providers }: Props) => {
  const searchParams = useSearchParams();
  const isSignUp = !!searchParams.get('isSignUp');
  const initTab = isSignUp ? 'signUp' : 'signIn';

  const [formData, setFormData] = useState<FormDataType>({} as FormDataType);
  const [activeTab, setActiveTab] = useState(initTab);
  const [errors, setErrors] = useState<ErrorsType>({} as ErrorsType);
  const data: FormType = dataset[activeTab];
  const formRef = useRef<HTMLFormElement>(null);
  const tabs = Object.values(dataset).map((data) => data.tab);
  // const dispatch = useDispatch();
  // const postSignup = (data: UserType) => dispatch(postSignupAction(data));

  const clickHandler = (id: string) => {
    setActiveTab(id);
  };

  const formDataHandler = (input: InputDataType) => {
    const { name, value, isRequired } = input;
    if (isRequired && !value) {
      setErrors((prev) => ({
        ...prev,
        [input.name]: REQUIRE_AUTH_DATA,
      }));
      return;
    }

    return setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    const data = formData;
    const hasErrors = Object.values(errors).some((error) => error);
    console.log('data', data);

    if (hasErrors) {
      setErrors(errors);
      return;
    }

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
        data={data}
        tabs={tabs}
        formDataHandler={formDataHandler}
        clickHandler={clickHandler}
        submitHandler={submitHandler}
      />
    </>
  );
};

export default AuthPageContainer;
