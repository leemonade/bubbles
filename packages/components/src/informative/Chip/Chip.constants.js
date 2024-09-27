import propTypes from 'prop-types';

export const CHIP_PROP_TYPES = {
  subject: propTypes.string.isRequired,
  isHidden: propTypes.bool.isRequired,
  isCollisionDetected: propTypes.bool,
  truncate: propTypes.bool,
  truncateLines: propTypes.number,
};

export const CHIP_DEFAULT_PROPS = {
  truncate: false,
};
