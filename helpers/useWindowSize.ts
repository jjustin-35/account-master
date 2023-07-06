import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const resizeHandler = () =>
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    resizeHandler();

    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return windowSize;
};

export default useWindowSize;
