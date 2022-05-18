import PropTypes from 'prop-types';

export const ACTIVITY_COUNTDOWN_DEFAULT_PROPS = {
  interval: 1000,
};
export const ACTIVITY_COUNTDOWN_PROP_TYPES = {
  finish: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  interval: PropTypes.number,
  rootStyles: PropTypes.any,
  rootClassname: PropTypes.string,
};
