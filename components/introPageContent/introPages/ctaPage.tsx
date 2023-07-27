'use client';

import IntroBannerGroup from '@/components/introBannerGroup';
import CtaBanner from '@/components/ctaBanner';

import { PageWrapper, InnerWrapper } from '../styled';

const CtaPage = () => {
  return (
    <PageWrapper>
      <InnerWrapper>
        <IntroBannerGroup variant="introPageCta" />
        <CtaBanner type="information" />
      </InnerWrapper>
    </PageWrapper>
  );
};

export default CtaPage;
