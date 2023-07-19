'use client';

import { ReactNode, useEffect, useState, Children } from 'react';

import { useSingleElementSize } from '@/helpers/useElementSize';
import useWindowSize from '@/helpers/useWindowSize';

import Dots from './dot';
import { Wrapper, SlideWrapper, Slide } from './styled';

type Props = {
  children: ReactNode;
};

const PageCarousel = ({ children }: Props) => {
  const [activePage, setActivePage] = useState(0);
  const { elementRef: slideWrapperRef, sizes: slideWrapperSizes } =
    useSingleElementSize<HTMLDivElement>();
  const { width: windowWidth } = useWindowSize();
  const childrenArray = Children.toArray(children);
  const amount = childrenArray.length;

  const clickHandler = (index: number) => {
    setActivePage(index);
  };

  const scrollHandler = () => {
    const elementWidth = slideWrapperSizes.width;
    const scrollDistanse = slideWrapperRef.current.scrollLeft;
    const currentPosition = Math.round(scrollDistanse / elementWidth);
    return setActivePage(currentPosition);
  };

  useEffect(() => {
    if (slideWrapperRef.current) {
      slideWrapperRef.current.addEventListener('scroll', scrollHandler);

      return () => {
        window.removeEventListener('scroll', scrollHandler);
      };
    }
  }, [slideWrapperRef.current, windowWidth]);

  useEffect(() => {
    const elementWidth = slideWrapperSizes.width;
    const scrollDistanse = elementWidth * activePage;
    slideWrapperRef.current.scrollLeft = scrollDistanse;
  }, [activePage, windowWidth]);

  return (
    <Wrapper>
      <SlideWrapper ref={slideWrapperRef}>
        {Children.map(children, (child, idx) => (
          <Slide key={idx}>{child}</Slide>
        ))}
      </SlideWrapper>
      <Dots
        amount={amount}
        activePage={activePage}
        clickHandler={clickHandler}
      />
    </Wrapper>
  );
};

export default PageCarousel;
