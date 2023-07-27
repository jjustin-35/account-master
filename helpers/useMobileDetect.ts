import { headers } from 'next/headers';

const mobileDetect = () => {
  const headersList = headers();
  const userAgent = headersList.get('user-agent');
  const mobileDetectRegex =
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;
  console.log('useAgent', userAgent);
  const isMobile = userAgent!.match(mobileDetectRegex);

  return { isMobile };
};

export default mobileDetect;
