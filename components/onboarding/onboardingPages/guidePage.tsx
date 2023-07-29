'use client';

import Banner from '@/components/banner';
import IconGroup from '@/components/iconGroup';
import { PageWrapper, InnerWrapper } from '../styled';

interface Props {
  variant: string;
}

const GuidePage = ({ variant }: Props) => {
  return (
    <PageWrapper>
      <InnerWrapper>
        <Banner variant={variant} />
        <IconGroup variant={variant} />
      </InnerWrapper>
    </PageWrapper>
  );
};

export default GuidePage;
