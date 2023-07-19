'use client';

import { ReactNode, useEffect, useState, Children } from 'react';

import { useSingleElementSize } from '@/helpers/useElementSize';

import Dots from './dot';
import { Wrapper, SlideWrapper, Slide } from './styled';

type Props = {
  children: ReactNode;
};

const PageCarousel = ({ children }: Props) => {
  const [activePage, setActivePage] = useState(0);
  const { elementRef: slideWrapperRef, sizes: slideWrapperSizes } =
    useSingleElementSize<HTMLDivElement>();
  const childrenArray = Children.toArray(children);
  const amount = childrenArray.length;

  const clickHandler = () => (index: number) => {
    setActivePage(index);
  };

  const scrollHandler = () => {
    if (slideWrapperRef.current) {
      const elementWidth = slideWrapperSizes.width;
      const activePage = Math.round(
        slideWrapperRef.current.scrollLeft / elementWidth,
      );
      setActivePage(activePage);
    }
  };

  useEffect(() => {
    if (slideWrapperRef.current) {
      slideWrapperRef.current.addEventListener('scroll', scrollHandler);
    }
    return () => {
      if (slideWrapperRef.current) {
        slideWrapperRef.current.removeEventListener('scroll', scrollHandler);
      }
    };
  }, []);

  useEffect(() => {
    if (slideWrapperRef.current) {
      const elementWidth = slideWrapperSizes.width;
      slideWrapperRef.current.scrollLeft = elementWidth * activePage;
    }
  }, [activePage]);

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
