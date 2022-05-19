import React, { useRef, useState } from 'react';
import { isFunction } from 'lodash';

export const useSyncState = (defaultState, onChange) => {
  const stateRef = useRef(defaultState);
  const [, forceUpdate] = useState({});

  function setState(updater) {
    const newValue = isFunction(updater) ? updater(stateRef.current) : updater;
    if (newValue !== stateRef.current) {
      onChange(newValue, stateRef.current);
    }
    stateRef.current = newValue;
    forceUpdate({});
  }

  return [stateRef.current, setState];
};
