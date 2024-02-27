import { redirect } from 'next/navigation';

import mobileDetect from '@/helpers/mobileDetect';
import IntroductionContent from '@/components/onboarding';

const Onboarding = () => {
  const { isMobile } = mobileDetect();
  if (!isMobile) redirect('/');
  return <IntroductionContent />;
};

export default Onboarding;
