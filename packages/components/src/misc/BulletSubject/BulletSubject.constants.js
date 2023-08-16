import PropTypes from 'prop-types';
export const BULLET_SUBJECT_DEFAULT_PROPS = {
  icon: 'https://github.com/leemonade/leemons/assets/27650532/81587829-c4b1-4c1a-b342-e8f24d0bd2a4',
  color: 'transparent',
  size: 'lg',
};

export const BULLET_SUBJECT_SIZES = ['lg', 'sm'];
export const BULLET_SUBJECT_PROP_TYPES = {
  icon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(BULLET_SUBJECT_SIZES),
};
