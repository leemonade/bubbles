import PropTypes from 'prop-types';
import { PROGRESS_STATES, PROGRESS_POSITIONS } from '../Progress';

export const STEP_DEFAULT_PROPS = {
  label: '',
  badge: '',
  childSteps: [],
};
export const STEP_PROP_TYPES = {
  label: PropTypes.string,
  badge: PropTypes.string,
  state: PropTypes.oneOf(PROGRESS_STATES),
  position: PropTypes.oneOf(PROGRESS_POSITIONS),
  childSteps: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, badge: PropTypes.string })
  ),
  currentChild: PropTypes.number,
};
