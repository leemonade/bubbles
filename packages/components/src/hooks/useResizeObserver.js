import React from 'react';

const defaultState = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

function useResizeObserver(debounce) {
  const [rect, setRect] = React.useState(defaultState);
  const ref = React.useRef();

  React.useEffect(() => {
    let resizeObserver;
    if (ref.current) {
      resizeObserver = new ResizeObserver((entries) => {
        if (entries[0] && JSON.stringify(rect) !== JSON.stringify(entries[0].contentRect)) {
          setRect(entries[0].contentRect);
        }
      });
      resizeObserver.observe(ref.current);
    }
    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [ref.current]);

  return [ref, rect];
}

export { useResizeObserver };
