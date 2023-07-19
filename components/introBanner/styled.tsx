import styled from 'styled-components';
import breakpoints from '@/helpers/styles/breakpoints';

const titleColors = {
  default: '#000000',
};

const fontColors = {
  default: '#000000',
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (${breakpoints.laptop}) {
    flex-direction: row;
    align-items: center;
    gap: 48px;
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
  max-width: 100%;
  margin-top: 24px;

  img {
    width: 100%;
  }
`;
