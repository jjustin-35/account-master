import {
  ButtonTheme,
  ButtonSize,
  ButtonRound,
} from '@/components/button/styled';

export type ImageType = {
  src: string;
  alt: string;
};

export type ButtonType = {
  text: string;
  link?: string;
  btnTheme?: ButtonTheme;
  size?: ButtonSize;
  round?: ButtonRound;
  onClick?: () => void;
};
