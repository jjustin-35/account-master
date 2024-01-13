import styled, { RuleSet, css } from 'styled-components';
import { btnThemes, btnSizes, btnRounds } from '@/constants/uiTypes';
import colors from '@/constants/styles/colors';

const themes: Record<btnThemes, RuleSet<object>> = {
  [btnThemes.primary]: css`
    background-color: ${colors.primary};
    color: #ffffff;
  `,
  [btnThemes.secondary]: css`
    background-color: ${colors.secondary};
    border: 1px solid ${colors.secondary};
    color: #000000;

    &:hover {
      background-color: #ffffff;
      color: ${colors.secondary};
    }
  `,
  [btnThemes.primaryOutline]: css`
    background-color: transparent;
    border: 1px solid ${colors.primary};
    color: ${colors.primary};
  `,
};

const sizes: Record<btnSizes, RuleSet<object>> = {
  [btnSizes.small]: css`
    padding: 8px 16px;
    font-size: 14px;
  `,
  [btnSizes.medium]: css`
    padding: 10px 20px;
    font-size: 16px;
  `,
  [btnSizes.large]: css`
    padding: 1px 24px;
    font-size: 20px;
  `,
};

const borderRadius: Record<btnRounds, RuleSet<object>> = {
  [btnRounds.normal]: css`
    border-radius: 4px;
  `,
  [btnRounds.pill]: css`
    border-radius: 9999px;
  `,
};

export const Wrapper = styled.a<{
  $btnTheme?: btnThemes;
  $size?: btnSizes;
  $round?: btnRounds;
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  padding: 8px 16px;

  ${({ $btnTheme }) => themes[$btnTheme || btnThemes.primary]};
  ${({ $size }) => sizes[$size || btnSizes.medium]};
  ${({ $round }) => borderRadius[$round || btnRounds.normal]};
`;
