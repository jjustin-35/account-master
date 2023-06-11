export default {
  logo: {
    src: '/images/common/account_master_header_logo.svg',
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
      btnTheme: 'primaryOutline',
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
