import PropTypes from 'prop-types';

export const AVATAR_SUBJECT_DEFAULT_PROPS = {
  color: 'transparent',
  size: 'xxlg',
  isMultiSubject: false,
  name: '',
};

export const AVATAR_SUBJECT_SIZES = ['xs', 'sm', 'md', 'lg', 'xlg', 'xxlg'];
export const AVATAR_SUBJECT_PROP_TYPES = {
  icon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(AVATAR_SUBJECT_SIZES),
  isMultiSubject: PropTypes.bool,
  name: PropTypes.string,
};
