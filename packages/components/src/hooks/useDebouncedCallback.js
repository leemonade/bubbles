import React from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { isFunction } from 'lodash';

function useDebouncedCallback(debounce) {
  const [r, setR] = React.useState();
  const ref = React.useRef();

  const [v] = useDebouncedValue(r, debounce);

  React.useEffect(() => {
    if (isFunction(ref.current)) ref.current();
  }, [v]);

  return (callback) => {
    ref.current = callback;
    setR(new Date().getTime());
  };
}

export { useDebouncedCallback };
