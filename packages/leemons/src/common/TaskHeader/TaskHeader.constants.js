import PropTypes from 'prop-types';

export const TASK_HEADER_SIZES = ['sm', 'md'];

export const TASK_HEADER_DEFAULT_PROPS = {
  title: '',
  subtitle: '',
  size: 'md',
  styles: {},
};
export const TASK_HEADER_PROP_TYPES = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  styles: PropTypes.object,
  className: PropTypes.string,
};
