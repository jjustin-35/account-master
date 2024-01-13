import styled from 'styled-components';
import breakpoints from '@/constants/styles/breakpoints';
import { Typography } from '@/constants/styles/globalStyles';
import { TypographyType } from '@/constants/types/global';

export const Wrapper = styled.div<{ $isReverse?: boolean }>`
  display: flex;
  flex-direction: ${({ $isReverse }) =>
    $isReverse ? 'column-reverse' : 'column'};
  align-items: center;
  gap: 16px;

  @media (${breakpoints.laptop}) {
    flex-direction: row;
    align-items: center;
    gap: 48px;
  }

  @media (${breakpoints.desktop}) {
    gap: 60px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h1<TypographyType>`
  font-size: ${({ $fontSize }) => $fontSize || 24}px;
  font-weight: ${({ $fontWeight }) => $fontWeight || 'bold'};
  color: ${({ color }) => color || '#000000'};
  text-align: ${({ $textAlign }) => $textAlign || 'left'};
`;

export const Desc = styled.p<TypographyType>`
  ${Typography}
`;

export const Image = styled.div`
  max-width: 100%;

  img {
    max-width: 100%;
  }
`;
