'use client';

import React, { useRef, useState } from 'react';
import { signIn } from 'next-auth/react';

import getFormData, { FormRefType } from '@/helpers/getFormData';

import AuthPageContent from '@/components/authPage';

const AuthPageContainer = ({ providers }) => {
  const [activeTab, setActiveTab] = useState('signIn');
  const inputRef: FormRefType = useRef({});

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
      signIn('', data);
      return;
    }

    return;
  };

  return (
    <AuthPageContent
      authProviders={providers}
      activeTab={activeTab}
      inputRef={inputRef}
      clickHandler={clickHandler}
      submitHandler={submitHandler}
    />
  );
};

export default AuthPageContainer;
