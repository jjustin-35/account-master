import { ReactNode } from 'react';
import { Session } from 'next-auth';

import ReduxProvider from './reduxProvider';
import NextAuthProvider from './nextAuthProvider';

type Props = {
  children?: ReactNode;
  session?: Session;
};

const Provider = ({ children, session }: Props) => {
  return (
    <ReduxProvider>
      <NextAuthProvider session={session}>{children}</NextAuthProvider>
    </ReduxProvider>
  );
};

export default Provider;
