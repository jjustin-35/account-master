'use client';

import Swiper from '@/containers/swiper';
import OnboardingHeader from './onboardingHeader';
import GuidePage from './onboardingPages/guidePage';
import FeaturePage from './onboardingPages/featurePage';
import CtaPage from './onboardingPages/ctaPage';

import { Wrapper } from './styled';

const OnboardingContent = () => {
  const variant = 'onboarding';
  return (
    <Wrapper>
      <OnboardingHeader />
      <Swiper>
        <GuidePage variant={variant} />
        <FeaturePage />
        <CtaPage />
      </Swiper>
    </Wrapper>
  );
};

export default OnboardingContent;
