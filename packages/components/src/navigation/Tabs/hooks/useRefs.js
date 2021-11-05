import React, { useRef, createRef } from 'react';

export const useRefs = () => {
  const cacheRefs = useRef(new Map());

  function getRef(key) {
    if (!cacheRefs.current.has(key)) {
      cacheRefs.current.set(key, createRef());
    }
    return cacheRefs.current.get(key);
  }

  function removeRef(key) {
    cacheRefs.current.delete(key);
  }

  return [getRef, removeRef];
};
