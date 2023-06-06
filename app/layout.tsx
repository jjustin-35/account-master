import NextAuthProvider from '@/lib/provider';
import StyledComponentsRegistry from '@/lib/styledComponentRegistry';
import GlobalStyle from './_globalStyle';

export const metadata = {
  title: '記帳大師',
  description: '記帳大師',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-tw">
      <body>
        <NextAuthProvider>
          <StyledComponentsRegistry>
            <GlobalStyle />
            {children}
          </StyledComponentsRegistry>
        </NextAuthProvider>
      </body>
    </html>
  );
}
