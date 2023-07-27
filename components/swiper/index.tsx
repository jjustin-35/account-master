'use client';

import { ReactNode, RefObject, Children } from 'react';

import Dots from './dot';
import { Wrapper, SwiperWrapper, Slide } from './styled';

interface Props {
  slideWrapperRef: RefObject<HTMLDivElement>;
  offset: number;
  swipeStartHandler: (e: React.MouseEvent | React.TouchEvent) => void;
  activePage: number;
  children: ReactNode;
}

const Swiper = ({
  slideWrapperRef,
  offset,
  swipeStartHandler,
  activePage,
  children,
}: Props) => {
  const amount = Children.count(children);
  return (
    <Wrapper>
      <SwiperWrapper
        ref={slideWrapperRef}
        offset={offset}
        onMouseDown={swipeStartHandler}
        onTouchStart={swipeStartHandler}
      >
        {Children.map(children, (child, idx) => (
          <Slide key={idx}>{child}</Slide>
        ))}
      </SwiperWrapper>
      <Dots amount={amount} activePage={activePage} />
    </Wrapper>
  );
};

export default Swiper;
