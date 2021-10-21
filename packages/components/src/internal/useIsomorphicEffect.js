import { useEffect, useLayoutEffect } from 'react';
import { canUseDOM } from './environment';

// useLayoutEffect on the client, useEffect on the server
const useIsomorphicEffect = canUseDOM ? useLayoutEffect : useEffect;

export default useIsomorphicEffect;
