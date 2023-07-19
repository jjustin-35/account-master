'use client';

import PageCarousel from '../pageCarousel';
import IntroPageHeader from '../introPageHeader';
import Banner from '../banner';
import IconGroup from '../iconGroup';
// import IntroBanner from '../introBanner';

import { Wrapper, InnerWrapper } from './styled';

const IntroPageContent = () => {
  const variant = 'introduction';
  return (
    <PageCarousel>
      <Wrapper>
        <IntroPageHeader />
        <InnerWrapper>
          <Banner variant={variant} />
          <IconGroup variant={variant} />
        </InnerWrapper>
      </Wrapper>
    </PageCarousel>
  );
};

export default IntroPageContent;
