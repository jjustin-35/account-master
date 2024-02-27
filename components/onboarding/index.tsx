'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

import Swiper from '@/containers/swiper';
import OnboardingHeader from './onboardingHeader';
import GuidePage from './onboardingPages/guidePage';
import FeaturePage from './onboardingPages/featurePage';
import CtaPage from './onboardingPages/ctaPage';

import { Wrapper } from './styled';

const OnboardingContent = () => {
  const variant = 'onboarding';
  const router = useRouter();

  useEffect(() => {
    const isOnboardedValue = Cookies.get('is_onboarded');

    if (!isOnboardedValue || isOnboardedValue !== 'true') {
      Cookies.set('is_onboarded', 'true');
      return;
    }

    router.push('/');
  }, []);
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
