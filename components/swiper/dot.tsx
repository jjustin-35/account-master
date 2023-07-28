'use client';

import { DotsWrapper, Dot } from './styled';

type Props = {
  amount: number;
  clickHandler?: (index: number) => void;
  activePage: number;
};

const Dots = ({ amount, clickHandler, activePage }: Props) => {
  return (
    <DotsWrapper>
      {[...Array(amount)].map((_, idx) => {
        const isActive = idx === activePage;
        return (
          <Dot
            key={idx}
            $isActive={isActive}
            onClick={clickHandler ? () => clickHandler(idx) : undefined}
          />
        );
      })}
    </DotsWrapper>
  );
};

export default Dots;
