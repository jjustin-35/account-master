import { redirect } from 'next/navigation';

import mobileDetect from '@/helpers/mobileDetect';

import Auth from '@/containers/auth';
import IntroPageContent from '@/components/introPageContent';

const Introduction = () => {
  const { isMobile } = mobileDetect();
  if (!isMobile) redirect('/');
  return (
    <Auth>
      <IntroPageContent />
    </Auth>
  );
};

export default Introduction;
