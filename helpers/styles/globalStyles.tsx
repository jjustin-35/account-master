import styled from 'styled-components';
import breakpoints from './breakpoints';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;

  @media (${breakpoints.tablet}) {
    max-width: 688px;
    padding: 0;
  }

  @media (${breakpoints.laptop}) {
    max-width: 960px;
  }

  @media (${breakpoints.desktop}) {
    max-width: 1080px;
  }
`;
