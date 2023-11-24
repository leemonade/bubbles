/* eslint no-unused-vars: "off" */
/* eslint-disable */
import overlap from './layout-algorithms/overlap';
import noOverlap from './layout-algorithms/no-overlap';

const DefaultAlgorithms = {
  overlap,
  'no-overlap': noOverlap,
};

function isFunction(a) {
  return !!(a && a.constructor && a.call && a.apply);
}

//
export function getStyledEvents({
  dayLayoutAlgorithm, // one of DefaultAlgorithms keys
  // or custom function
}) {
  let algorithm = dayLayoutAlgorithm;

  if (dayLayoutAlgorithm in DefaultAlgorithms) algorithm = DefaultAlgorithms[dayLayoutAlgorithm];

  if (!isFunction(algorithm)) {
    // invalid algorithm
    return [];
  }

  return algorithm.apply(this, arguments);
}
