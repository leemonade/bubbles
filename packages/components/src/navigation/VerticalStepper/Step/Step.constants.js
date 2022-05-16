import PropTypes from 'prop-types';
import { PROGRESS_STATES, PROGRESS_POSITIONS } from '../Progress';

export const STEP_DEFAULT_PROPS = {
  label: '',
  text: '',
  badge: '',
  isChild: false,
  isActive: false,
};
export const STEP_PROP_TYPES = {
  label: PropTypes.string,
  text: PropTypes.string,
  badge: PropTypes.string,
  state: PropTypes.oneOf(PROGRESS_STATES),
  position: PropTypes.oneOf(PROGRESS_POSITIONS),
  onClick: PropTypes.func,
  isChild: PropTypes.bool,
  isActive: PropTypes.bool,
};
