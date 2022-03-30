import PropTypes from 'prop-types';

export const PROGRESS_STATES = ['notStarted', 'inProgress', 'completed', 'OK'];
export const PROGRESS_POSITIONS = ['start', 'between', 'end'];

export const PROGRESS_DEFAULT_PROPS = {
  state: 'notStarted',
  position: 'between',
  isButton: false,
};
export const PROGRESS_PROP_TYPES = {
  state: PropTypes.oneOf(PROGRESS_STATES),
  position: PropTypes.oneOf(PROGRESS_POSITIONS),
  isButton: PropTypes.bool,
};
