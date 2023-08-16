import styled from 'styled-components';
import breakpoints from '@/constants/styles/breakpoints';

const titleColors = {
  default: '#000000',
};

const fontColors = {
  default: '#000000',
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (${breakpoints.laptop}) {
    flex-direction: row;
    align-items: center;
    gap: 40px;
  }
`;

export const Content = styled.div``;

export const Title = styled.h2<{ variant?: string }>`
  font-size: 20px;
  font-weight: bold;
  color: ${({ variant }) => titleColors[variant] || titleColors.default};
  margin-bottom: 16px;
`;

export const Desc = styled.p<{ variant?: string }>`
  font-size: 16px;
  color: ${({ variant }) => fontColors[variant] || fontColors.default};
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
