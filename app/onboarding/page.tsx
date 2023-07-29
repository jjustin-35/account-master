import { redirect } from 'next/navigation';

import mobileDetect from '@/helpers/mobileDetect';

import Auth from '@/containers/auth';
import IntroductionContent from '@/components/onboarding';

const Onboarding = () => {
  const { isMobile } = mobileDetect();
  if (!isMobile) redirect('/');
  return (
    <Auth>
      <IntroductionContent />
    </Auth>
  );
};

export default Onboarding;
