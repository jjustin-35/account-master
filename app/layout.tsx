import NextAuthProvider from '@/lib/provider';
import StyledComponentsRegistry from '@/lib/styledComponentRegistry';

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
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </NextAuthProvider>
      </body>
    </html>
  );
}
