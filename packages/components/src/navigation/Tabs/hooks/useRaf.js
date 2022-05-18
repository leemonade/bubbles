import { useRef, useState, useEffect } from 'react';
import { isFunction } from 'lodash';
import raf from './wrapperRaf';

export const useRaf = (callback) => {
  const rafRef = useRef();
  const removedRef = useRef(false);

  function trigger(...args) {
    if (!removedRef.current) {
      raf.cancel(rafRef.current);
      rafRef.current = raf(() => {
        callback(...args);
      });
    }
  }

  useEffect(() => {
    return () => {
      removedRef.current = true;
      raf.cancel(rafRef.current);
    };
  }, []);

  return trigger;
};

export const useRafState = (defaultState) => {
  const batchRef = useRef([]);
  const [, forceUpdate] = useState({});
  const state = useRef(isFunction(defaultState) ? defaultState() : defaultState);

  const flushUpdate = useRaf(() => {
    let current = state.current;
    batchRef.current.forEach((callback) => {
      current = callback(current);
    });
    batchRef.current = [];

    state.current = current;
    forceUpdate({});
  });

  function updater(callback) {
    batchRef.current.push(callback);
    flushUpdate();
  }

  return [state.current, updater];
};
