import { ImageType } from '@/constants/types/global';

type IconGroupType = {
  image: ImageType;
  text: string;
};

type DataType = {
  [key: string]: IconGroupType[];
};

const data: DataType = {
  introducton: [
    {
      image: {
        src: '/images/icon-group/1.png',
        alt: 'icon-group-1',
      },
      text: 'text1',
    },
    {
      image: {
        src: '/images/icon-group/2.png',
        alt: 'icon-group-2',
      },
      text: 'text2',
    },
    {
      image: {
        src: '/images/icon-group/3.png',
        alt: 'icon-group-3',
      },
      text: 'text3',
    },
  ],
};

export default data;
