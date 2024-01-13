import { getProviders } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import AuthPageContent from '@/containers/authPage';

const AuthPage = async () => {
  const providers = await getProviders();
  const session = await getServerSession();

  if (session) {
    redirect('/application/daily');
  }

  return <AuthPageContent providers={providers} />;
};

export default AuthPage;
