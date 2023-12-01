import PropTypes from 'prop-types';

export const PROGRESSRING_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];
export const PROGRESS_RING_DEFAULT_PROPS = {
  sections: [{ value: 10, color: '#307AE8' }],
  label: '',
  // rootColor: '#307AE8',
  roundCaps: true,
  size: PROGRESSRING_SIZES[3],
  thickness: 10,
};
export const PROGRESS_RING_PROP_TYPES = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      color: PropTypes.string,
    }),
  ),
  label: PropTypes.string,
  rootColor: PropTypes.string,
  roundCaps: PropTypes.bool,
  size: PropTypes.oneOf(PROGRESSRING_SIZES),
  thickness: PropTypes.number,
};
