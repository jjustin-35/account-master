'use client';

import { signIn } from 'next-auth/react';
import React from 'react';

import { FormRefType } from '@/helpers/getFormData';

import ButtonTabs from './buttonTabs';
import InputField from '@/components/fields/input';
import { Container } from '@/helpers/styles/globalStyles';
import { Wrapper, Form } from './styled';
import Button from '@/components/button';
import dataset, { FormType } from './data';

interface Props {
  authProviders: any;
  activeTab: string;
  inputRef: FormRefType;
  clickHandler: (id: string) => void;
  submitHandler: (e: React.MouseEvent) => void;
}

const AuthForm = ({
  authProviders,
  activeTab,
  inputRef,
  clickHandler,
  submitHandler,
}: Props) => {
  const data: FormType = dataset[activeTab];
  const tabs = Object.values(dataset).map((data) => data.tab);
  return (
    <Container>
      <Wrapper>
        <ButtonTabs
          tabs={tabs}
          activeTab={activeTab}
          clickHandler={clickHandler}
        />
        <Form>
          {data.inputs.map((input, idx) => (
            <InputField {...input} key={idx} inputRef={inputRef} />
          ))}
          <Button {...data.submit} onClick={submitHandler} />
        </Form>
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
      </Wrapper>
    </Container>
  );
};

export default AuthForm;
