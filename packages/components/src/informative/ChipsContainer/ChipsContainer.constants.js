import propTypes from 'prop-types';

export const CHIPS_CONTAINER_PROP_TYPES = {
  subjects: propTypes.arrayOf(propTypes.string),
  chipsToShow: propTypes.number || propTypes.object,
  isCollisionDetected: propTypes.bool,
  labels: propTypes.object,
};

export const CHIPS_CONTAINER_DEFAULT_PROPS = {
  subjects: [],
  chipsToShow: null,
  isCollisionDetected: false,
  labels: {},
};
