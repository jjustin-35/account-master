'use client';

import { useState } from 'react';

import ButtonTabs from './buttonTabs';
import InputField from '@/components/fields/input';
import { Container } from '@/helpers/styles/globalStyles';
import { Wrapper, Form } from './styled';
import dataset from './data';

const AuthForm = () => {
  const { tabs } = dataset;
  const [activeTab, setActiveTab] = useState('signIn');
  const data = dataset[activeTab];

  const clickHandler = (id: string) => {
    setActiveTab(id);
  };

  return (
    <Container>
      <Wrapper>
        <ButtonTabs
          tabs={tabs}
          activeTab={activeTab}
          clickHandler={clickHandler}
        />
        <Form>
          {data.inputs.map((input) => (
            <InputField {...input} key={input.id} />
          ))}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default AuthForm;
