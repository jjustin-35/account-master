import styled, { css } from 'styled-components';

const themes = {
  primary: css`
    background-color: #000000;
    border: 1px solid #000000;
    color: #ffffff;

    &:hover {
      background-color: #ffffff;
      color: #000000;
    }
  `,
  secondary: css`
    background-color: #ffffff;
    border: 1px solid #000000;
    color: #000000;

    &:hover {
      background-color: #000000;
      color: #ffffff;
    }
  `,
};

const sizes = {
  small: css`
    padding: 8px 16px;
    font-size: 14px;
  `,
  medium: css`
    padding: 8px 16px;
    font-size: 16px;
  `,
  large: css`
    padding: 10px 20px;
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

export const Wrapper = styled.a<{
  $btnTheme?: string;
  $size?: string;
  $round?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;

  ${({ $btnTheme }) => themes[$btnTheme || 'primary']};
  ${({ $size }) => sizes[$size || 'medium']};
  ${({ $round }) => borderRadius[$round || 'normal']};
`;
