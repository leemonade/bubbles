import PropTypes from 'prop-types';

export const AVATAR_SIZES = ['sm', 'md', 'lg', 'xlg'];
export const AVATAR_STATE = ['normal', 'alert', 'notifications', 'error', 'activity'];
export const AVATAR_COLORS = [
  '#DC5571',
  '#F26262',
  '#E36B2B',
  '#E8C642',
  '#96D47F',
  '#50B579',
  '#4F96FF',
  '#7449F4',
  '#B462F2',
  '#EC62D8',
];
export const AVATAR_ACTIVITY_STATUS = ['online'];

export const AVATAR_DEFAULT_PROPS = {
  size: 'md',
  state: 'normal',
  showIconAndImage: false,
};
export const AVATAR_PROP_TYPES = {
  image: PropTypes.string,
  size: PropTypes.oneOf(AVATAR_SIZES),
  state: PropTypes.oneOf(AVATAR_STATE),
  activityStatus: PropTypes.oneOf(AVATAR_ACTIVITY_STATUS),
  color: PropTypes.string,
  initials: PropTypes.string,
  showIconAndImage: PropTypes.bool,
  fullName: PropTypes.string,
  icon: PropTypes.any,
  alt: PropTypes.string,
};
