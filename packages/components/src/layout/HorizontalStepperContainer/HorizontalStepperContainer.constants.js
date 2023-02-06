import PropTypes from 'prop-types';
import { isNaN } from 'lodash';

// export function parseWidth(value) {
//   const result = parseInt(value);

//   if (
//     isNaN(result) &&
//     ([('vh', 'vw', 'em', 'em')].includes(value.slice(-2)) || ['%'].includes(value.slice(-1)))
//   ) {
//     return value;
//   }

//   return result;
// }

export const HORIZONTAL_STEPPER_CONTAINER_DEFAULT_PROPS = {
  stickyAt: 0,
  allowStepClick: false,
  contentPadding: 0,
  fullHeight: false,
};

export const HORIZONTAL_STEPPER_CONTAINER_PROP_TYPES = {
  padding: PropTypes.number,
  allowStepClick: PropTypes.bool,
  fullHeight: PropTypes.bool,
  contentPadding: PropTypes.number,
  stickyAt: PropTypes.number,
  Header: PropTypes.element,
};
