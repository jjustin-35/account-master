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
