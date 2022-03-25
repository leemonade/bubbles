import PropTypes from 'prop-types';

export const MODAL_SIZES = ['xs', 'sm', 'md', 'lg'];

export const MODAL_DEFAULT_PROPS = {
  size: 'sm',
  centered: true,
  withCloseButton: true,
  centerTitle: false,
};
export const MODAL_PROP_TYPES = {
  title: PropTypes.string,
  centerTitle: PropTypes.bool,
  size: PropTypes.oneOf(MODAL_SIZES),
  centered: PropTypes.bool,
  withCloseButton: PropTypes.bool,
};
