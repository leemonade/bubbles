import React, { useState, useRef, useEffect } from 'react';
import { isFunction } from 'lodash';

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
      return isFunction(defaultValue) ? defaultValue() : defaultValue;
    }
    return isFunction(defaultStateValue) ? defaultStateValue() : defaultStateValue;
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
