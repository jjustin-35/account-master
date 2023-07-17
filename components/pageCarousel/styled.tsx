import styled, { css } from 'styled-components';
import { colors } from '@/constants/styles';

export const Wrapper = styled.div`
  position: relative;
  padding: 24px 0;
  overflow-x: hidden;
  height: 100vh;
`;

export const SlideWrapper = styled.div`
  display: flex;
  scroll-behavior: smooth;
`;

export const Slide = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
`;

export const DotsWrapper = styled.div`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: 14px;
`;

export const Dot = styled.div<{ $isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${colors.dot_brown};

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: ${colors.dot_brown_dark};
    `}
`;
