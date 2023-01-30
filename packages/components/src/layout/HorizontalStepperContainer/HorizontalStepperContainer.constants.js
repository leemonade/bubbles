import PropTypes from 'prop-types';
import { isNaN } from 'lodash';

export function parseWidth(value) {
  const result = parseInt(value);

  if (
    isNaN(result) &&
    ([('vh', 'vw', 'em', 'em')].includes(value.slice(-2)) || ['%'].includes(value.slice(-1)))
  ) {
    return value;
  }

  return result;
}

export const HORIZONTAL_STEPPER_CONTAINER_DEFAULT_PROPS = {
  disableContentPadding: false,
  stickyAt: 0,
  legible: true,
  allowStepClick: false,
};
export const HORIZONTAL_STEPPER_CONTAINER_PROP_TYPES = {
  padding: PropTypes.number,
  allowStepClick: PropTypes.bool,
  disableContentPadding: PropTypes.bool,
  stickyAt: PropTypes.number,
  legible: PropTypes.bool,
};
