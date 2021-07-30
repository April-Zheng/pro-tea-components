import { useRef } from 'react';

const useDelay = () => {
  const timeRef = useRef(null);

  return function (fn: () => void, delayTime: number) {
    if (timeRef) {
      clearTimeout(timeRef.current);
      timeRef.current = setTimeout(fn, delayTime);
    }
  };
};

export default useDelay;
