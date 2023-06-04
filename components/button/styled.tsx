import styled, { css } from 'styled-components';

const themes = {
  primary: css`
    background-color: #000000;
    color: #ffffff;

    &:hover {
      background-color: #ffffff;
      color: #000000;
    }
  `,
};

const sizes = {
  small: css`
    padding: 0.5rem 1rem;
    font-size: 14px;
  `,
  medium: css`
    padding: 1rem 2rem;
    font-size: 16px;
  `,
  large: css`
    padding: 1.5rem 3rem;
    font-size: 20px;
  `,
};

export const Wrapper = styled.a<{ btnTheme?: string; size?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ btnTheme }) => themes[btnTheme || 'primary']};
  ${({ size }) => sizes[size || 'medium']};
`;
