import styled from 'styled-components';

export const breakpoints = {
  tablet: 'min-width: 768px',
  laptop: 'min-width: 1024px',
  desktop: 'min-width: 1280px',
  largeDesktop: 'min-width: 1440px',
  fourK: 'min-width: 1920px',
};

export const colors = {
  primary: '#2b7faf',
  secondary: '#a4cfea',
  brown: '#7a7067',
  blue_dark: '#3b4e68',
  dark: 'rgba(0, 0, 0, 0.8)',
  dot_brown: '#967c71',
  dot_brown_dark: '#421D18',
};

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
