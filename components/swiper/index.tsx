'use client';

import { ReactNode, Children, useRef, useState, useEffect } from 'react';

import useStateRef from '@/helpers/useStateRef';
import getTouchEventData from '@/helpers/getTouchEventData';

import Dots from './dot';
import { Wrapper, SwiperWrapper, Slide } from './styled';

type SwipeEvent = TouchEvent | MouseEvent;
type ReactSwipeEvent<T> = React.TouchEvent<T> | React.MouseEvent<T>;

interface Props {
  children: ReactNode;
}

const Swiper = ({ children }: Props) => {
  const startXRef = useRef(0);
  const currentOffsetRef = useRef(0);
  const [, setSwiperSize, getSwiperSizeRef] = useStateRef({
    offsetWidth: 0,
    scrollWidth: 0,
  });
  const [offset, setOffset, getOffsetRef] = useStateRef(0);
  const [activePage, setActivePage] = useState(0);
  const slideWrapperRef = useRef<HTMLDivElement>(null);
  const minOffsetRef = useRef(0);
  const amount = Children.count(children);

  const moveEvents = ['mousemove', 'touchmove'];
  const endEvents = ['mouseup', 'touchend'];

  const swipeMoveHandler = (e: SwipeEvent) => {
    const currentX = getTouchEventData(e).clientX;
    const diff = startXRef.current - currentX;
    const newOffset = currentOffsetRef.current - diff;

    setOffset(newOffset);
  };

  const swipeEndHandler = () => {
    const minOffset = minOffsetRef.current;
    const maxOffset = 0;
    const { offsetWidth } = getSwiperSizeRef();

    const moveOffset = (() => {
      const offset = getOffsetRef();
      if (offset > maxOffset) {
        return maxOffset;
      }
      if (offset < minOffset) {
        return minOffset;
      }
      return offset;
    })();

    const targetPage = Math.round(moveOffset / offsetWidth);
    const swipeOffset = targetPage * offsetWidth;
    setActivePage(Math.abs(targetPage));
    setOffset(swipeOffset);

    moveEvents.map((event) => {
      window.removeEventListener(event, swipeMoveHandler);
    });
    endEvents.map((event) => {
      window.removeEventListener(event, swipeEndHandler);
    });
  };

  const swipeStartHandler = (e: ReactSwipeEvent<HTMLDivElement>) => {
    currentOffsetRef.current = getOffsetRef();
    startXRef.current = getTouchEventData(e).clientX;

    moveEvents.map((event) => {
      window.addEventListener(event, swipeMoveHandler);
    });
    endEvents.map((event) => {
      window.addEventListener(event, swipeEndHandler);
    });
  };

  useEffect(() => {
    const offsetWidth = slideWrapperRef.current?.offsetWidth || 0;
    const scrollWidth = slideWrapperRef.current?.scrollWidth || 0;

    setSwiperSize({ offsetWidth, scrollWidth });

    minOffsetRef.current = offsetWidth - scrollWidth;
  }, [slideWrapperRef.current]);

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
