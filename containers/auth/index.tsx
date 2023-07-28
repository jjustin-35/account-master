'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

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

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  return <>{children}</>;
};

export default Auth;
