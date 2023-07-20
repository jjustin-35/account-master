'use client';

import { ReactNode, useEffect, useState, Children } from 'react';

import debounce from '@/helpers/debounce';
import { useSingleElementSize } from '@/helpers/useElementSize';
import useWindowSize from '@/helpers/useWindowSize';

import Dots from './dot';
import { Wrapper, SlideWrapper, Slide } from './styled';

type Props = {
  children: ReactNode;
};

const PageCarousel = ({ children }: Props) => {
  const [activePage, setActivePage] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const {
    elementRef: slideWrapperRef,
    sizes: { width: elementWidth },
  } = useSingleElementSize<HTMLDivElement>();
  const { width: windowWidth } = useWindowSize();
  const childrenArray = Children.toArray(children);
  const amount = childrenArray.length;

  const clickHandler = (index: number) => {
    setActivePage(index);
  };

  const scrollHandler = () => {
    setScrollPosition(slideWrapperRef.current.scrollLeft);
  };

  const debouncedScrollHandler = debounce(scrollHandler, 200);

  useEffect(() => {
    if (slideWrapperRef.current) {
      slideWrapperRef.current.addEventListener(
        'scroll',
        debouncedScrollHandler,
      );

      return () => {
        window.removeEventListener('scroll', debouncedScrollHandler);
      };
    }
  }, [slideWrapperRef.current, windowWidth]);

  useEffect(() => {
    const scrollDistanse = elementWidth * activePage;
    const offsetDistance = scrollPosition - scrollDistanse;
    const isLastPage = activePage === amount - 1;
    const isFirstPage = activePage === 0;

    if (offsetDistance === 0) return;
    if (offsetDistance > 0) {
      return isLastPage
        ? setActivePage(activePage)
        : setActivePage(activePage + 1);
    }

    if (offsetDistance < 0) {
      return isFirstPage
        ? setActivePage(activePage)
        : setActivePage(activePage - 1);
    }
  }, [scrollPosition, windowWidth]);

  useEffect(() => {
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
