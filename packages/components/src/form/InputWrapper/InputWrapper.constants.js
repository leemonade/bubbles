import PropTypes from 'prop-types';

export const INPUT_WRAPPER_SIZES = ['xs', 'sm'];
export const INPUT_WRAPPER_ORIENTATIONS = ['horizontal', 'vertical'];

export const INPUT_WRAPPER_SHARED_PROPS = {
  label: PropTypes.string,
  description: PropTypes.string,
  help: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
};

export const INPUT_WRAPPER_PROP_TYPES = {
  ...INPUT_WRAPPER_SHARED_PROPS,
  size: PropTypes.oneOf(INPUT_WRAPPER_SIZES),
  orientation: PropTypes.oneOf(INPUT_WRAPPER_ORIENTATIONS),
  headerClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  headerStyle: PropTypes.any,
  contentStyle: PropTypes.any,
  autoComplete: PropTypes.string,
};
export const INPUT_WRAPPER_DEFAULT_PROPS = {
  label: '',
  description: '',
  error: '',
  help: '',
  orientation: 'vertical',
  size: 'sm',
  required: false,
  autoComplete: 'off',
};
