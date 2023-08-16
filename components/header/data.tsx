import { ImageType, ButtonType } from '@/constants/types/global';

type DataType = {
  logo: ImageType;
  menu: {
    text: string;
    link: string;
  }[];
  signInButtons: ButtonType[];
  signOutButtons: ButtonType[];
};

const data: DataType = {
  logo: {
    src: '/images/common/account_master_logo.svg',
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
  signInButtons: [
    {
      text: 'Sign In',
      btnTheme: 'primary',
      round: 'pill',
    },
    {
      text: 'Sign Up',
      link: {
        pathname: '/auth',
        query: { isSignUp: 'true' },
      },
      btnTheme: 'primaryOutline',
      round: 'pill',
    },
  ],
  signOutButtons: [
    {
      text: 'Sign Out',
      btnTheme: 'primary',
      round: 'pill',
    },
  ],
};

export default data;
