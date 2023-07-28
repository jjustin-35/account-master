import styled from 'styled-components';
import colors from '@/helpers/styles/colors';

const bgColor = {
  default: colors.primary,
};

const textColor = {
  default: '#ffffff',
};

export const Wrapper = styled.div<{ type: string }>`
  width: 100%;
  padding: 16px 0;
  background-color: ${({ type }) => bgColor[type] || bgColor.default};
`;

export const Slogan = styled.h2<{ type: string }>`
  font-size: 20px;
  margin-bottom: 16px;
  color: ${({ type }) => textColor[type] || textColor.default};
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;
