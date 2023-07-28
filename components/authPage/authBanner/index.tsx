'use client';

import Banner from '../../banner';
import { Outer } from './styled';

const AuthBanner = () => {
  return (
    <Outer>
      <Banner variant="auth" />
    </Outer>
  );
};

export default AuthBanner;
