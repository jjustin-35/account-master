import { ImageType } from '@/constants/types/global';

type DataType = {
  [key: string]: {
    title?: string;
    desc?: string;
    image: ImageType;
  }[];
};

const data: DataType = {
  introPageFeature: [
    {
      title: '介面簡單易用，讓你輕鬆上手',
      desc: '簡潔的介面設計，使你能輕鬆使用APP來記錄你的收支，全面掌握你的金錢流動。',
      image: {
        src: '/images/introduction/img_intro_page_feature_1.svg',
        alt: 'img_intro_page_feature_1',
      },
    },
    {
      title: '多種財務圖表，掌握消費模式',
      desc: '以圖表呈現財務狀況，快速掌握你的消費模式，以利未來規劃。',
      image: {
        src: '/images/introduction/img_intro_page_feature_2.svg',
        alt: 'img_intro_page_feature_2',
      },
    },
  ],
  introPageCta: [
    {
      title: '誰適合使用？',
      desc: '剛開始規劃金錢消費的新鮮人、記帳新手或想要一個簡單記帳的使用者。',
      image: {
        src: '/images/introduction/img_intro_page_cta.svg',
        alt: 'img_intro_page_cta',
      },
    },
  ],
};

export default data;
