import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export const useBoundingBox = () => {
  const ref = useRef();
  const [bbox, setBbox] = useState({});

  const set = () =>
  {
    setBbox((ref && ref.current) ? ref.current.getBoundingClientRect() : {});
  }

  useEffect(() => {
    set();
    window.addEventListener('resize', set);
    window.addEventListener('transitionend', set);
    return () => {
      window.removeEventListener('resize', set)
      window.removeEventListener('transitionend', set)
    };
  }, []);

  return [bbox, ref];
};