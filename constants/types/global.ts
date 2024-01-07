import React from 'react';

import { btnThemes, btnSizes, btnRounds } from '../uiTypes';

export type ImageType = {
  src: string;
  alt: string;
};

export type NextLinkHrefType = {
  pathname: string;
  query?: Record<string, string>;
};

export type ButtonType = {
  text: string;
  id?: string;
  link?: string | NextLinkHrefType;
  btnTheme?: btnThemes;
  size?: btnSizes;
  round?: btnRounds;
  onClick?: (e?: React.MouseEvent) => void;
};

export type TypographyType = {
  textAlign?: 'left' | 'center' | 'right';
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
};
