import styled from 'styled-components';
import breakpoints from '@/helpers/styles/breakpoints';

export const Outer = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (${breakpoints.laptop}) {
    flex-direction: row;
    align-items: center;
    gap: 48px;
  }

  @media (${breakpoints.desktop}) {
    gap: 60px;
  }
`;

export const Content = styled.div``;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 16px;
`;

export const Desc = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #000000;
`;

export const Image = styled.div`
  max-width: 100%;

  img {
    width: 100%;
  }
`;
