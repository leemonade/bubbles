import PropTypes from 'prop-types';
import { PROGRESS_STATES, PROGRESS_POSITIONS } from '../Progress';

export const STEP_DEFAULT_PROPS = {
  label: '',
  text: '',
  badge: '',
  isChild: false,
  isActive: false,
  showChild: false,
  childRange: [],
};
export const STEP_PROP_TYPES = {
  label: PropTypes.string,
  text: PropTypes.string,
  completion: PropTypes.shape({
    current: PropTypes.number,
    total: PropTypes.number,
  }),
  badge: PropTypes.string,
  state: PropTypes.oneOf(PROGRESS_STATES),
  position: PropTypes.oneOf(PROGRESS_POSITIONS),
  onClick: PropTypes.func,
  isChild: PropTypes.bool,
  isActive: PropTypes.bool,
  showChild: PropTypes.bool,
  childRange: PropTypes.arrayOf(PropTypes.number),
};
