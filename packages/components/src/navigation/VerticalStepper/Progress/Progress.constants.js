import PropTypes from 'prop-types';

export const PROGRESS_STATES = ['pending', 'current', 'completed', 'OK', 'KO'];
export const PROGRESS_POSITIONS = ['start', 'between', 'end'];

export const PROGRESS_DEFAULT_PROPS = {
  state: 'pending',
  position: 'between',
  isButton: false,
  isActivity: false,
  isChild: false,
  isCurrent: false,
};
export const PROGRESS_PROP_TYPES = {
  state: PropTypes.oneOf(PROGRESS_STATES),
  position: PropTypes.oneOf(PROGRESS_POSITIONS),
  isButton: PropTypes.bool,
  isActivity: PropTypes.bool,
  isChild: PropTypes.bool,
  isCurrent: PropTypes.bool,
};
