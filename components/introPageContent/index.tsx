'use client';

import PageCarousel from '../pageCarousel';
import IntroPageHeader from '../introPageHeader';
import GuidePage from './introPages/guidePage';
import FeaturePage from './introPages/featurePage';
// import CtaPage from './introPages/ctaPage';

import { Wrapper } from './styled';

const IntroPageContent = () => {
  const variant = 'introduction';
  return (
    <Wrapper>
      <IntroPageHeader />
      <PageCarousel>
        <GuidePage variant={variant} />
        <FeaturePage />
        {/* <CtaPage /> */}
      </PageCarousel>
    </Wrapper>
  );
};

export default IntroPageContent;
