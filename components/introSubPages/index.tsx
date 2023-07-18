'use client';

import IntroHeader from '../introHeader';
import Banner from '../banner';

import { Wrapper } from './styled';

const IntroSubPages = () => {
  const variant = 'introduction';
  return (
    <>
      <Wrapper>
        <IntroHeader />
        <Banner variant={variant} />
      </Wrapper>
    </>
  );
};

export default IntroSubPages;
