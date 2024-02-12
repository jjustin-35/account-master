import styled, { css } from 'styled-components';
import colors from '@/constants/styles/colors';
import breakpoints from '@/constants/styles/breakpoints';
import { HeaderType } from '.';

export const Wrapper = styled.div<{ $isBoxShadow: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 1;
  min-height: 68px;

  ${({ $isBoxShadow }) =>
    $isBoxShadow &&
    css`
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `};

  a {
    display: block;
  }
`;

export const Logo = styled.img`
  max-height: 48px;
`;

export const Menu = styled.div`
  display: none;

  @media (${breakpoints.laptop}) {
    display: flex;
    align-items: center;
  }
`;

export const MenuItem = styled.a`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.dark};
  margin-right: 24px;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
  }
`;

export const MenuGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonGroup = styled.div`
  display: none;

  @media (${breakpoints.tablet}) {
    display: flex;
    align-items: center;

    a {
      margin-right: 16px;
    }
  }
`;

export const BurgarMenuWrapper = styled.div<{
  $isOpen: boolean;
  $type: HeaderType;
}>`
  position: relative;
  width: 30px;
  height: 24px;
  cursor: pointer;
  span {
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 99px;
    background-color: #000000;
    transition: all 0.3s;
    transform: scale(0.8);

    ${({ $type }) =>
      $type === 'app' &&
      css`
        background-color: ${colors.primary};
      `}

    &:nth-child(1) {
      top: 0;

      ${({ $isOpen }) =>
        $isOpen &&
        css`
          top: 50%;
          transform: translateY(-50%) rotate(45deg) scale(1);
        `};
    }

    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%) scale(0.8);
      ${({ $isOpen }) =>
        $isOpen &&
        css`
          opacity: 0;
        `};
    }

    &:nth-child(3) {
      bottom: 0;

      ${({ $isOpen }) =>
        $isOpen &&
        css`
          bottom: 50%;
          transform: translateY(50%) rotate(-45deg) scale(1);
        `};
    }
  }

  @media (${breakpoints.laptop}) {
    display: none;
  }
`;
