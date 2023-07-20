import IntroBannerGroup from '@/components/introBannerGroup';

import { PageWrapper } from '../styled';

const FeaturePage = () => {
  const variant = 'introPageFeature';
  return (
    <PageWrapper>
      <IntroBannerGroup variant={variant} />
    </PageWrapper>
  );
};

export default FeaturePage;
