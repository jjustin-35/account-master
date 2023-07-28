type CallbackType = (...args: any[]) => void;

const debounce = (callback: CallbackType, delay: number) => {
  let timer: ReturnType<typeof setTimeout>;
  let isDebounced = false;

  return (...args: any[]) => {
    if (isDebounced) {
      clearTimeout(timer);
    }
    isDebounced = true;
    timer = setTimeout(() => {
      callback(...args);
      isDebounced = false;
    }, delay);
  };
};

export default debounce;
