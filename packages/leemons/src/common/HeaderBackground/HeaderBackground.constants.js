import PropTypes from 'prop-types';

export const HEADER_BACKGROUND_DEFAULT_PROPS = {
  image: '',
  color: '',
  height: '100%',
  width: '100%',
  withGradient: false,
  withBlur: false,
  styles: {},
};
export const HEADER_BACKGROUND_PROP_TYPES = {
  image: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  withGradient: PropTypes.bool,
  withBlur: PropTypes.bool,
  styles: PropTypes.object,
};
