'use client';

import Auth from '@/containers/auth';
import IntroPageContent from '@/components/introPageContent';

const Introduction = () => {
  return (
    <Auth>
      <IntroPageContent />
    </Auth>
  );
};

export default Introduction;
