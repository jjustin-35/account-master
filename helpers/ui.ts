export const getTouchEventData = (
  e: TouchEvent | MouseEvent | React.TouchEvent | React.MouseEvent,
) => ('changedTouches' in e ? e.changedTouches[0] : e);

export const changePageRound = (
  number: number,
  direction: 'left' | 'right',
) => {
  const fundation = direction === 'right' ? 1 / 3 : 2 / 3;
  const int = number > 0 ? Math.floor(number) : Math.ceil(number);
  const decimal = number - int;

  if (decimal > fundation) return int + 1;
  if (decimal < -fundation) return int - 1;
  return int;
};
