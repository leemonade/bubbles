import PropTypes from 'prop-types';

export const DRAWER_PUSH_DIRECTIONS = ['ltr', 'rtl', 'ttb', 'btt'];

export const DRAWER_PUSH_DEFAULT_PROPS = {
  opened: false,
  size: 300,
  style: {},
  direction: 'ltr',
  useAria: true,
};
export const DRAWER_PUSH_PROP_TYPES = {
  opened: PropTypes.bool,
  size: PropTypes.number,
  direction: PropTypes.oneOf(DRAWER_PUSH_DIRECTIONS),
  style: PropTypes.object,
  className: PropTypes.string,
  modalAriaLabel: PropTypes.string,
  useAria: PropTypes.bool,
};
