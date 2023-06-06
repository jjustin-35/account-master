export default {
  logo: {
    src: '/images/logo.svg',
    alt: 'header-logo',
  },
  menu: [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'About',
      link: '/about',
    },
  ],
  signInButton: [
    {
      text: 'Sign In',
      link: '/signin',
      btnTheme: 'primary',
      round: 'pill',
    },
    {
      text: 'Sign Up',
      link: '/signup',
      btnTheme: 'secondary',
      round: 'pill',
    },
  ],
  signOutButton: [
    {
      text: 'Sign Out',
      link: '/signout',
      btnTheme: 'primary',
    },
  ],
};
