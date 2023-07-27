'use client';

import Swiper from '../swiper';
import IntroPageHeader from '../introPageHeader';
import GuidePage from './introPages/guidePage';
import FeaturePage from './introPages/featurePage';
import CtaPage from './introPages/ctaPage';

import { Wrapper } from './styled';

const IntroPageContent = () => {
  const variant = 'introduction';
  return (
    <Wrapper>
      <IntroPageHeader />
      <Swiper>
        <GuidePage variant={variant} />
        <FeaturePage />
        <CtaPage />
      </Swiper>
    </Wrapper>
  );
};

export default IntroPageContent;
