import PropTypes from 'prop-types';

export const ACTIVITY_COUNTDOWN_DEFAULT_PROPS = {
  interval: 1000,
  withIcon: true,
};
export const ACTIVITY_COUNTDOWN_PROP_TYPES = {
  finish: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  interval: PropTypes.number,
  withIcon: PropTypes.bool,
  rootStyles: PropTypes.any,
  rootClassname: PropTypes.string,
};
