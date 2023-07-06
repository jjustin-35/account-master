import styled, { css } from 'styled-components';
import { colors } from '@constants/styles';

export const Wrapper = styled.div<{
  $isMenuOpen: boolean;
}>`
  background-color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  height: 0;
  overflow: hidden;
  z-index: 5;
  transition: height 0.3s;

  ${({ $isMenuOpen }) =>
    $isMenuOpen &&
    css`
      height: 100vh;
    `}
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
`;

export const MenuItem = styled.a`
  font-size: 16px;
  padding: 8px 0;
  color: #000000;
  transition: color 0.3s;

  &:hover {
    color: ${colors.primary};
  }
`;
