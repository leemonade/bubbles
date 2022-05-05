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

export const VERTICAL_STEPPER_CONTAINER_DEFAULT_PROPS = {
  disableContentPadding: false,
  navWidth: 276,
  stickyAt: 0,
  legible: true,
};
export const VERTICAL_STEPPER_CONTAINER_PROP_TYPES = {
  padding: PropTypes.number,
  disableContentPadding: PropTypes.bool,
  navWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stickyAt: PropTypes.number,
  legible: PropTypes.bool,
};
