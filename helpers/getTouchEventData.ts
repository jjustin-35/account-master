const getTouchEventData = (
  e: TouchEvent | MouseEvent | React.TouchEvent | React.MouseEvent,
) => ('changedTouches' in e ? e.changedTouches[0] : e);

export default getTouchEventData;
