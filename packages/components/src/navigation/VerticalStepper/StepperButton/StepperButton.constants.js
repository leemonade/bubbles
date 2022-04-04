import PropTypes from 'prop-types';
import { PROGRESS_STATES, PROGRESS_POSITIONS } from '../Progress';

export const STEPPER_BUTTON_DEFAULT_PROPS = {
  label: '',
  active: false,
};
export const STEPPER_BUTTON_PROP_TYPES = {
  label: PropTypes.string,
  active: PropTypes.bool,
  state: PropTypes.oneOf(PROGRESS_STATES),
  position: PropTypes.oneOf(PROGRESS_POSITIONS),
  onClick: PropTypes.func,
};
