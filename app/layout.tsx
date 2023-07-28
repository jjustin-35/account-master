import { getServerSession } from 'next-auth';

import { authOptions } from './api/auth/[...nextauth]/route';

import Provider from '@/lib/providers';
import StyledComponentsRegistry from '@/lib/styledComponentRegistry';
import GlobalStyle from './_globalStyle';

export const metadata = {
  title: '記帳大師',
  description: '記帳大師',
};

interface Props {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: Props) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="zh-tw">
      <body>
        <Provider session={session}>
          <StyledComponentsRegistry>
            <GlobalStyle />
            {children}
          </StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}
