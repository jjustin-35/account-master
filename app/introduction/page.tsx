import { redirect } from 'next/navigation';

import mobileDetect from '@/helpers/useMobileDetect';

import Auth from '@/containers/auth';
import IntroPageContent from '@/components/introPageContent';

const Introduction = () => {
  const { isMobile } = mobileDetect();
  console.log('isMobile', isMobile);
  if (!isMobile) redirect('/');
  return (
    <Auth>
      <IntroPageContent />
    </Auth>
  );
};

export default Introduction;
