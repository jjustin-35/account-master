'use client';

import { signIn } from 'next-auth/react';
import React, { useRef } from 'react';

import { FormType } from '@/containers/authPage/data';
import { ButtonType } from '@/constants/types/global';

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
  error?: string;
}
interface Props {
  authProviders: any;
  activeTab: string;
  data: FormType;
  errors: Record<string, string>;
  tabs: ButtonType[];
  formRef: ReturnType<typeof useRef<HTMLFormElement>>;
  clickHandler: (id: string) => void;
  submitHandler: (e: React.MouseEvent) => void;
}

const Field = ({ inputData, activeTab, error }: FieldProps) => {
  const { type } = inputData;

  if (type === 'email')
    return <EmailField inputData={inputData} error={error} />;
  if (type === 'password') {
    const isSignIn = activeTab === 'signIn';
    return (
      <PasswordField isSignIn={isSignIn} inputData={inputData} error={error} />
    );
  }
  return <InputField {...inputData} errorMsg={error} />;
};

const AuthForm = ({
  authProviders,
  activeTab,
  data,
  tabs,
  errors,
  formRef,
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
            error={errors?.[input.name]}
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
