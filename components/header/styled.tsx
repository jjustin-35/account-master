import styled, { css } from 'styled-components';
import { colors, breakpoints } from '@constants/styles';

export const Wrapper = styled.div<{ $isBoxShadow: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 1;

  ${({ $isBoxShadow }) =>
    $isBoxShadow &&
    css`
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `};
`;

export const Logo = styled.img`
  max-width: 100px;
  max-height: 40px;
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

export const BurgarMenuWrapper = styled.div<{ $isOpen: boolean }>`
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
  span {
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 99px;
    background-color: #000000;
    transition: all 0.3s;

    &:nth-child(1) {
      top: 0;

      ${({ $isOpen }) =>
        $isOpen &&
        css`
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        `};
    }

    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
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
          transform: translateY(50%) rotate(-45deg);
        `};
    }
  }

  @media (${breakpoints.laptop}) {
    display: none;
  }
`;
