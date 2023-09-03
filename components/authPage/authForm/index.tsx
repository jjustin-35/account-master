'use client';

import { signIn } from 'next-auth/react';
import React, { useRef } from 'react';

import { FormType } from '@/containers/authPage/data';
import { ButtonType } from '@/constants/types/global';
import { ErrorsType } from '@/containers/authPage';

import ButtonTabs from './buttonTabs';
import { InputType } from '@/components/fields/input';
import Button from '@/components/button';
import EmailField from './fields/email';
import PasswordField from './fields/password';
import UsernameField from './fields/username';
import { Container } from '@/constants/styles/globalStyles';
import { Wrapper, Form, ButtonWrapper, HorizonLineWrapper } from './styled';

interface FieldProps {
  inputData: InputType;
  activeTab: string;
  hasError?: boolean;
}
interface Props {
  authProviders: any;
  activeTab: string;
  data: FormType;
  errorType: ErrorsType;
  tabs: ButtonType[];
  formRef: ReturnType<typeof useRef<HTMLFormElement>>;
  clickHandler: (id: string) => void;
  submitHandler: (e: React.MouseEvent) => void;
}

const Field = ({ inputData, activeTab, hasError }: FieldProps) => {
  const { type, name } = inputData;

  if (type === 'email')
    return <EmailField inputData={inputData} hasError={hasError} />;
  if (type === 'password') {
    const isSignIn = activeTab === 'signIn';
    return (
      <PasswordField
        isSignIn={isSignIn}
        inputData={inputData}
        hasError={hasError}
      />
    );
  }
  if (name === 'username')
    return <UsernameField inputData={inputData} hasError={hasError} />;

  return;
};

const AuthForm = ({
  authProviders,
  activeTab,
  data,
  tabs,
  errorType,
  formRef,
  clickHandler,
  submitHandler,
}: Props) => {
  return (
    <Container>
      <Wrapper>
        <ButtonTabs
          tabs={tabs}
          activeTab={activeTab}
          clickHandler={clickHandler}
        />
        <Form ref={formRef}>
          {data.inputs.map((input, idx) => (
            <Field
              key={idx}
              inputData={input}
              activeTab={activeTab}
              hasError={!!errorType[input.name]}
            />
          ))}
          <ButtonWrapper>
            <Button {...data.submit} onClick={submitHandler} />
          </ButtonWrapper>
        </Form>
        {activeTab === 'signIn' && (
          <>
            <HorizonLineWrapper>
              <span>or</span>
            </HorizonLineWrapper>
            <ButtonWrapper>
              {authProviders &&
                Object.values(authProviders).map((provider: any) => {
                  if (provider.id === 'credentials') {
                    return null;
                  }
                  return (
                    <Button
                      key={provider.id}
                      onClick={() => signIn(provider.id)}
                      text={provider.name}
                    />
                  );
                })}
            </ButtonWrapper>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default AuthForm;
