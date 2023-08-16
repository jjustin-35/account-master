import styled, { css } from 'styled-components';
import colors from '@/constants/styles/colors';

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  max-width: 100%;
`;

export const SwiperWrapper = styled.div<{ offset: number }>`
  display: flex;
  touch-action: pan-y;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-out;

  ${({ offset }) =>
    offset &&
    css`
      transform: translateX(${offset}px);
    `}
`;

export const Slide = styled.div`
  flex: 0 0 auto;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const DotsWrapper = styled.div`
  position: fixed;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: 14px;
`;

export const Dot = styled.div<{ $isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${colors.dot_brown};
  cursor: pointer;
  transition: all 0.2s;

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: ${colors.dot_brown_dark};
      transform: scale(1.2);
    `}
`;
