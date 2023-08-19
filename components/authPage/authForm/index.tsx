'use client';

import { signIn } from 'next-auth/react';
import React, { useRef } from 'react';

import { ErrorsType } from '@/containers/authPage';

import ButtonTabs from './buttonTabs';
import InputField from '@/components/fields/input';
import { Container } from '@/constants/styles/globalStyles';
import { Wrapper, Form, ButtonWrapper, HorizonLineWrapper } from './styled';
import Button from '@/components/button';
import { FormType } from '@/containers/authPage/data';
import { ButtonType } from '@/constants/types/global';

interface Props {
  authProviders: any;
  activeTab: string;
  data: FormType;
  tabs: ButtonType[];
  errors: ErrorsType;
  formRef: ReturnType<typeof useRef<HTMLFormElement>>;
  clickHandler: (id: string) => void;
  submitHandler: (e: React.MouseEvent) => void;
}

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
          <InputField {...input} key={idx} errorMsg={errors[input.name]} />
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
