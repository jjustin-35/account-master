import styled, { css } from 'styled-components';
import colors from '@/helpers/styles/colors';

const themes = {
  primary: css`
    background-color: ${colors.primary};
    color: #ffffff;
  `,
  secondary: css`
    background-color: ${colors.secondary};
    border: 1px solid ${colors.secondary};
    color: #000000;

    &:hover {
      background-color: #ffffff;
      color: ${colors.secondary};
    }
  `,
  primaryOutline: css`
    background-color: transparent;
    border: 1px solid ${colors.primary};
    color: ${colors.primary};
  `,
};

const sizes = {
  small: css`
    padding: 8px 16px;
    font-size: 14px;
  `,
  medium: css`
    padding: 10px 20px;
    font-size: 16px;
  `,
  large: css`
    padding: 1px 24px;
    font-size: 20px;
  `,
};

const borderRadius = {
  normal: css`
    border-radius: 4px;
  `,
  pill: css`
    border-radius: 9999px;
  `,
};

export type ButtonTheme = keyof typeof themes;
export type ButtonSize = keyof typeof sizes;
export type ButtonRound = keyof typeof borderRadius;

export const Wrapper = styled.a<{
  $btnTheme?: string;
  $size?: string;
  $round?: string;
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  padding: 8px 16px;

  ${({ $btnTheme }) => themes[$btnTheme || 'primary']};
  ${({ $size }) => sizes[$size || 'medium']};
  ${({ $round }) => borderRadius[$round || 'normal']};
`;
