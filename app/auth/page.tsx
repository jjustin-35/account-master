import { getProviders } from 'next-auth/react';

import AuthPageContent from '@/containers/authPage';

const AuthPage = async () => {
  const providers = await getProviders();
  return (
    <>
      <AuthPageContent providers={providers} />
    </>
  );
};

export default AuthPage;
