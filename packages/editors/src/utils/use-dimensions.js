import { useEffect, useState, useRef } from 'react';

export const useDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const observer = useRef(
    new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      if (ref.current) setDimensions({ width, height });
    })
  );

  useEffect(() => {
    if (ref.current) {
      observer.current.observe(ref.current);
    }
    return () => {
      ref.current?.disconnect();
    };
  }, []);

  return dimensions;
};
