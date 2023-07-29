import { ImageType } from '@/constants/types/global';

type IconGroupType = {
  image: ImageType;
  text: string;
};

type DataType = {
  [key: string]: IconGroupType[];
};

const data: DataType = {
  onboarding: [
    {
      image: {
        src: '/images/introduction/bar_chart_icon.svg',
        alt: 'ic-bar-chart',
      },
      text: '雙圖表',
    },
    {
      image: {
        src: '/images/introduction/user_icon.svg',
        alt: 'ic-user',
      },
      text: '帳戶連結',
    },
    {
      image: {
        src: '/images/introduction/coins_icon.svg',
        alt: 'ic-coins',
      },
      text: '資產管理',
    },
  ],
};

export default data;
