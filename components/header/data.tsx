import { ImageType, ButtonType } from '@/constants/types/global';
import { btnRounds, btnThemes } from '@/constants/uiTypes';

type MenuType = {
  text: string;
  link: string;
};

type DataType = {
  logo: ImageType;
  menu: MenuType[];
  signInButtons: ButtonType[];
  signOutButtons: ButtonType[];
};

const data: DataType = {
  logo: {
    src: '/images/common/blue-bird-counting-logo-horizontal.svg',
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
      btnTheme: btnThemes.primary,
      round: btnRounds.pill,
    },
    {
      text: 'Sign Up',
      link: {
        pathname: '/auth',
        query: { isSignUp: 'true' },
      },
      btnTheme: btnThemes.primaryOutline,
      round: btnRounds.pill,
    },
  ],
  signOutButtons: [
    {
      text: 'Sign Out',
      btnTheme: btnThemes.primary,
      round: btnRounds.pill,
    },
  ],
};

export default data;
