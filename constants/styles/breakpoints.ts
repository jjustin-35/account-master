export const deviceSize = {
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  largeDesktop: 1440,
  bigScreen: 1920,
};

const breakpoints = {
  tablet: `min-width: ${deviceSize.tablet}px`,
  laptop: `min-width: ${deviceSize.laptop}px`,
  desktop: `min-width: ${deviceSize.desktop}px`,
  largeDesktop: `min-width: ${deviceSize.largeDesktop}px`,
  bigScreen: `min-width: ${deviceSize.bigScreen}px`,
};

export default breakpoints;
