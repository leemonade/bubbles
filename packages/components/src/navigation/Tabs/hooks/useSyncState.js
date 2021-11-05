import React, { useRef, useState } from 'react';

export const useSyncState = (defaultState, onChange) => {
  const stateRef = useRef(defaultState);
  const [, forceUpdate] = useState({});

  function setState(updater) {
    const newValue = typeof updater === 'function' ? updater(stateRef.current) : updater;
    if (newValue !== stateRef.current) {
      onChange(newValue, stateRef.current);
    }
    stateRef.current = newValue;
    forceUpdate({});
  }

  return [stateRef.current, setState];
};
