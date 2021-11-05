import React, { useState, useRef, useEffect } from 'react';

export const useMergedState = (
  defaultStateValue,
  options // { defaultValue?, value?, onChange?, postState? }
) => {
  const { defaultValue, value, onChange, postState } = options || {};
  const [innerValue, setInnerValue] = useState(() => {
    if (value !== undefined) {
      return value;
    }
    if (defaultValue !== undefined) {
      return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
    }
    return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
  });

  let mergedValue = value !== undefined ? value : innerValue;
  if (postState) {
    mergedValue = postState(mergedValue);
  }

  function triggerChange(newValue) {
    setInnerValue(newValue);
    if (mergedValue !== newValue && onChange) {
      onChange(newValue, mergedValue);
    }
  }

  // Effect of reset value to `undefined`
  const firstRenderRef = useRef(true);
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if (value === undefined) {
      setInnerValue(value);
    }
  }, [value]);

  return [mergedValue, triggerChange];
};
