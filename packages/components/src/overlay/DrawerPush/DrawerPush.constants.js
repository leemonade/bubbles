import PropTypes from 'prop-types';

export const DRAWER_PUSH_DEFAULT_PROPS = {
  opened: false,
  size: 300,
  style: {},
};
export const DRAWER_PUSH_PROP_TYPES = {
  opened: PropTypes.bool,
  size: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
};
