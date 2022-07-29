import PropTypes from 'prop-types';

export const AVATAR_SIZES = ['xs', 'sm', 'md', 'lg'];
export const AVATAR_STATE = ['normal', 'alert', 'notifications', 'error', 'activity'];
export const AVATAR_ACTIVITY_STATUS = ['online'];

export const AVATAR_DEFAULT_PROPS = {
  size: 'sm',
  state: 'normal',
};
export const AVATAR_PROP_TYPES = {
  image: PropTypes.string,
  size: PropTypes.oneOf(AVATAR_SIZES),
  state: PropTypes.oneOf(AVATAR_STATE),
  activityStatus: PropTypes.oneOf(AVATAR_ACTIVITY_STATUS),
  color: PropTypes.string,
  initials: PropTypes.string,
  fullName: PropTypes.string,
  icon: PropTypes.any,
  alt: PropTypes.string,
};
