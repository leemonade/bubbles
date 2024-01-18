import PropTypes from 'prop-types';

export const VERTICAL_CONTAINER_DEFAULT_PROPS = {
  disableContentPadding: false,
  navWidth: 276,
  stickyAt: 0,
  legible: true,
};
export const VERTICAL_CONTAINER_PROP_TYPES = {
  padding: PropTypes.number,
  disableContentPadding: PropTypes.bool,
  navWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stickyAt: PropTypes.number,
  legible: PropTypes.bool,
};
