import PropTypes from 'prop-types';
import { HORIZONTAL_STEPPER_DEFAULT_PROPS, HORIZONTAL_STEPPER_PROP_TYPES } from '../../navigation';

export const HORIZONTAL_STEPPER_CONTAINER_DEFAULT_PROPS = {
  ...HORIZONTAL_STEPPER_DEFAULT_PROPS,
  stickyAt: 0,
  contentPadding: 0,
  fullHeight: false,
};

export const HORIZONTAL_STEPPER_CONTAINER_PROP_TYPES = {
  ...HORIZONTAL_STEPPER_PROP_TYPES,
  padding: PropTypes.number,
  fullHeight: PropTypes.bool,
  contentPadding: PropTypes.number,
  stickyAt: PropTypes.number,
  Header: PropTypes.element,
};
