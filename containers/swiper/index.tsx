import { ReactNode, useRef, useState, useEffect } from 'react';
import Swiper from '@/components/swiper';

import useStateRef from '@/helpers/useStateRef';
import { getTouchEventData, oneThirdRound } from '@/helpers/ui';

type SwipeEvent = TouchEvent | MouseEvent;
type ReactSwipeEvent<T> = React.TouchEvent<T> | React.MouseEvent<T>;

interface Props {
  children: ReactNode;
}

const SwiperContainer = ({ children }: Props) => {
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

    const targetPage = oneThirdRound(moveOffset / offsetWidth);
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
    <Swiper
      slideWrapperRef={slideWrapperRef}
      offset={offset}
      swipeStartHandler={swipeStartHandler}
      activePage={activePage}
    >
      {children}
    </Swiper>
  );
};

export default SwiperContainer;
