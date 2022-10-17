import PropTypes from 'prop-types';

export const POPOVER_POSITIONS = [
  'bottom',
  'left',
  'right',
  'top',
  'bottom-end',
  'bottom-start',
  'left-end',
  'left-start',
  'right-end',
  'right-start',
  'top-end',
  'top-start',
];

export const POPOVER_DEFAULT_PROPS = {
  padded: false,
  withArrow: false,
  withCloseButton: false,
  offset: 10,
};
export const POPOVER_PROP_TYPES = {
  opened: PropTypes.bool,
  target: PropTypes.node,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  position: PropTypes.oneOf(POPOVER_POSITIONS),
  withArrow: PropTypes.bool,
  withCloseButton: PropTypes.bool,
  padded: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  onClose: PropTypes.func,
};
