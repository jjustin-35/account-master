'use client';

import { signIn } from 'next-auth/react';
import React, { useRef } from 'react';

import { FormType } from '@/containers/authPage/data';
import { ButtonType } from '@/constants/types/global';
import { InputDataType } from '@/containers/authPage';

import ButtonTabs from './buttonTabs';
import InputField, { InputType } from '@/components/fields/input';
import Button from '@/components/button';
import EmailField from './fields/email';
import PasswordField from './fields/password';
import { Container } from '@/constants/styles/globalStyles';
import { Wrapper, Form, ButtonWrapper, HorizonLineWrapper } from './styled';

interface FieldProps {
  inputData: InputType;
  activeTab: string;
  formDataHandler: (input: InputDataType) => void;
}
interface Props {
  authProviders: any;
  activeTab: string;
  data: FormType;
  tabs: ButtonType[];
  formRef: ReturnType<typeof useRef<HTMLFormElement>>;
  formDataHandler: (input: InputDataType) => void;
  clickHandler: (id: string) => void;
  submitHandler: (e: React.MouseEvent) => void;
}

const Field = ({ inputData, activeTab, formDataHandler }: FieldProps) => {
  const { type } = inputData;
  if (type === 'email')
    return (
      <EmailField inputData={inputData} formDataHandler={formDataHandler} />
    );
  if (type === 'password') {
    const isSignIn = activeTab === 'signIn';
    return (
      <PasswordField
        isSignIn={isSignIn}
        inputData={inputData}
        formDataHandler={formDataHandler}
      />
    );
  }
  return <InputField {...inputData} />;
};

const AuthForm = ({
  authProviders,
  activeTab,
  data,
  tabs,
  formRef,
  formDataHandler,
  clickHandler,
  submitHandler,
}: Props) => (
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
            formDataHandler={formDataHandler}
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

export default AuthForm;
