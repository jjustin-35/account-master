import styled, { css } from 'styled-components';
import { TypographyType } from '@/constants/types/global';
import breakpoints from './breakpoints';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
  max-width: 100%;

  @media (${breakpoints.tablet}) {
    max-width: 688px;
    padding: 0;
  }

  @media (${breakpoints.laptop}) {
    max-width: 960px;
  }

  @media (${breakpoints.desktop}) {
    max-width: 1080px;
  }
`;

export const Typography = css<TypographyType>`
  font-size: ${({ $fontSize }) => $fontSize || '16px'};
  font-weight: ${({ $fontWeight }) => $fontWeight || 'normal'};
  line-height: ${({ $lineHeight }) => $lineHeight || 'unset'};
  color: ${({ $color }) => $color || '#000000'};
  text-align: ${({ $textAlign }) => $textAlign || 'left'};
`;
