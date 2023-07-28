'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

type Props = {
  children: React.ReactNode;
  redirectPath?: string;
};

const Auth = ({ children, redirectPath }: Props) => {
  const { status } = useSession({
    required: true,
    onUnauthenticated: () => {
      redirect(redirectPath || '/');
    },
  });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  return <>{children}</>;
};

export default Auth;
