export { default } from 'next-auth/middleware';

export const config = { matcher: ['/application/:path*', '/onboarding'] };
