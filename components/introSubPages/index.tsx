'use client';

import IntroHeader from '../introHeader';
import Banner from '../banner';
import IconGroup from '../iconGroup';

import { Wrapper, InnerWrapper } from './styled';

const IntroSubPages = () => {
  const variant = 'introduction';
  return (
    <>
      <Wrapper>
        <IntroHeader />
        <InnerWrapper>
          <Banner variant={variant} />
          <IconGroup variant={variant} />
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default IntroSubPages;
