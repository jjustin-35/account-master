'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import useMobileDetect from '@/helpers/useMobileDetect';

type Props = {
  children: React.ReactNode;
};

const Auth = ({ children }: Props) => {
  const { status } = useSession({
    required: true,
    onUnauthenticated: () => {
      redirect('/');
    },
  });
  const { isMobile } = useMobileDetect();
  console.log('isMobile', isMobile);
  if (!isMobile) redirect('/');
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  return <>{children}</>;
};

export default Auth;
