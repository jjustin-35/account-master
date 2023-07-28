import { useRef, useState } from 'react';

const useStateRef = <T>(initialState: T): [T, (state: T) => void, () => T] => {
  const [state, setState] = useState(initialState);
  const stateRef = useRef(state);

  const setStateRef = (newState: T) => {
    stateRef.current = newState;
    setState(newState);
  };

  const getStateRef = () => stateRef.current;

  return [state, setStateRef, getStateRef];
};

export default useStateRef;
