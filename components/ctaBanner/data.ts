import { ButtonType } from '@/constants/types/global';

type DataType = {
  [key: string]: {
    title: string;
    button: ButtonType;
  };
};

const data: DataType = {
  information: {
    title: '心動不如馬上行動，<br/>開始體驗我們的服務！',
    button: {
      text: '馬上體驗',
      link: '/accountbook',
      btnTheme: 'secondary',
      size: 'medium',
      round: 'pill',
    },
  },
};

export default data;
