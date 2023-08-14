'use client';

import React, { useRef, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useDispatch } from 'react-redux';

import { UserType } from '@/constants/types/modal';

import getFormData, { FormRefType } from '@/helpers/getFormData';
import { postSignup as postSignupAction } from '@/redux/sagaActions/auth';

import AuthPageContent from '@/components/authPage';
import dataset, { FormType } from './data';

const AuthPageContainer = ({ providers }) => {
  const [activeTab, setActiveTab] = useState('signIn');
  const inputRef: FormRefType = useRef({});
  const data: FormType = dataset[activeTab];
  const tabs = Object.values(dataset).map((data) => data.tab);
  const dispatch = useDispatch();
  const postSignup = (data: UserType) => dispatch(postSignupAction(data));

  const clickHandler = (id: string) => {
    setActiveTab(id);
  };

  const submitHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    const data = getFormData(inputRef);
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
      data={data}
      tabs={tabs}
      inputRef={inputRef}
      clickHandler={clickHandler}
      submitHandler={submitHandler}
    />
  );
};

export default AuthPageContainer;
