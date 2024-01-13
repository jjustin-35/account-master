import { ImageType, TypographyType } from '@/constants/types/global';

type DataType = {
  [key: string]: {
    title: {
      text: string;
    } & TypographyType;
    desc?: {
      text: string;
    } & TypographyType;
    image: ImageType;
    isReverse?: boolean;
  };
};

const data: DataType = {
  onboarding: {
    title: {
      text: '記帳大師<br/>協助您輕鬆掌握財務狀況',
    },
    desc: {
      text: '找不到適合自己的記帳工具？記帳大師絕對是你的好夥伴，讓你輕鬆、快速記帳。',
    },
    image: {
      src: '/images/introduction/intro_banner.svg',
      alt: 'img-intro-banner',
    },
  },
  auth: {
    title: {
      text: '歡迎來到記帳大師',
      $textAlign: 'center',
    },
    image: {
      src: '/images/common/account_master_icon.svg',
      alt: 'img-account-master-icon',
    },
    isReverse: true,
  },
};

export default data;
