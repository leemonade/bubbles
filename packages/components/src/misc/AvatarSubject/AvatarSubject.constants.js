import PropTypes from 'prop-types';
export const AVATAR_SUBJECT_DEFAULT_PROPS = {
  icon: 'https://github.com/leemonade/leemons/assets/27650532/81587829-c4b1-4c1a-b342-e8f24d0bd2a4',
  color: 'transparent',
  size: 'lg',
  altText: 'subject icon',
};

export const AVATAR_SUBJECT_SIZES = ['xs', 'sm', 'md', 'lg', 'xlg'];
export const AVATAR_SUBJECT_PROP_TYPES = {
  icon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(AVATAR_SUBJECT_SIZES),
  altText: PropTypes.string,
};
