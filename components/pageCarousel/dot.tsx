'use client';

import { DotsWrapper, Dot } from './styled';

type Props = {
  amount: number;
  clickHandler: () => (index: number) => void;
  activePage: number;
};

const Dots = ({ amount, clickHandler, activePage }: Props) => {
  return (
    <DotsWrapper>
      {[...Array(amount)].map((_, index) => {
        const isActive = index === activePage;
        return <Dot key={index} $isActive={isActive} onClick={clickHandler} />;
      })}
    </DotsWrapper>
  );
};

export default Dots;
