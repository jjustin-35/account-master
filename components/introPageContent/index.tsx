'use client';

import PageCarousel from '../pageCarousel';
import IntroPageHeader from '../introPageHeader';
import Banner from '../banner';
import IconGroup from '../iconGroup';
// import IntroBanner from '../introBanner';

import { Wrapper, PageWrapper, InnerWrapper } from './styled';

const IntroPageContent = () => {
  const variant = 'introduction';
  return (
    <Wrapper>
      <IntroPageHeader />
      <PageCarousel>
        <PageWrapper>
          <InnerWrapper>
            <Banner variant={variant} />
            <IconGroup variant={variant} />
          </InnerWrapper>
        </PageWrapper>
        <PageWrapper>
          <InnerWrapper>
            <Banner variant={variant} />
            <IconGroup variant={variant} />
          </InnerWrapper>
        </PageWrapper>
      </PageCarousel>
    </Wrapper>
  );
};

export default IntroPageContent;
