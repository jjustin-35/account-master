import { useEffect, useRef, useState } from 'react';
import useWindowSize from './useWindowSize';

const getElementSize = <T extends HTMLElement>(node: T[]) => {
  if (Array.isArray(node)) {
    const sizes = node.map((element) => ({
      width: element.offsetWidth,
      height: element.offsetHeight,
    }));
    return sizes;
  }
};

export const useSingleElementSize = <T extends HTMLElement>() => {
  const [sizes, setSizes] = useState({ width: 0, height: 0 });
  const elementRef = useRef<T>(null);
  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    const node = elementRef.current;
    const elementSizes = {
      width: node.offsetWidth,
      height: node.offsetHeight,
    };
    setSizes(elementSizes);
  }, [windowWidth]);

  return { elementRef, sizes };
};

export const useMultipleElementSize = <T extends HTMLElement>() => {
  const [sizes, setSizes] = useState<{ width: number; height: number }[]>([]);
  const elementRef = useRef<T[]>([]);
  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    const node = elementRef.current;
    const elementSizes = getElementSize(node);
    setSizes(elementSizes);
  }, [windowWidth]);

  return { elementRef, sizes };
};
