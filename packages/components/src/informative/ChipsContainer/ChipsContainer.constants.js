import PropTypes from 'prop-types';

export const CHIPS_CONTAINER_PROP_TYPES = {
  items: PropTypes.arrayOf(PropTypes.string),
  chipsToShow: PropTypes.number,
  isCollisionDetected: PropTypes.bool,
  labels: PropTypes.object,
  style: PropTypes.object,
  changeOnResize: PropTypes.bool,
  truncate: PropTypes.bool,
  truncateLines: PropTypes.number,
};

export const CHIPS_CONTAINER_DEFAULT_PROPS = {
  items: [],
  chipsToShow: null,
  isCollisionDetected: false,
  labels: {},
  changeOnResize: false,
  truncate: false,
  truncateLines: 1,
};
