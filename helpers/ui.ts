export const getTouchEventData = (
  e: TouchEvent | MouseEvent | React.TouchEvent | React.MouseEvent,
) => ('changedTouches' in e ? e.changedTouches[0] : e);

export const oneThirdRound = (number: number) => {
  const fundation = 1 / 3;
  const int = Math.floor(number);
  const decimal = number - int;

  if (decimal > fundation) return int + 1;
  if (decimal < -fundation) return int - 1;
  return int;
};
