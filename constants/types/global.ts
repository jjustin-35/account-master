import React from 'react';

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
  id?: string;
  link?: string;
  btnTheme?: ButtonTheme;
  size?: ButtonSize;
  round?: ButtonRound;
  onClick?: (e?: React.MouseEvent) => void;
};

export type TypographyType = {
  textAlign?: 'left' | 'center' | 'right';
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
};
