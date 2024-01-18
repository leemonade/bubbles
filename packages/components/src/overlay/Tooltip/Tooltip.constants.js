import PropTypes from 'prop-types';

export const TOOLTIP_SIZES = ['xs', 'sm', 'md'];
export const TOOLTIP_COLORS = ['primary', 'secondary'];
export const TOOLTIP_POSITION = [
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

export const TOOLTIP_DEFAULT_PROPS = {
  size: 'sm',
  color: 'primary',
  position: 'top',
  withArrow: true,
  withinPortal: true,
};

export const TOOLTIP_PROP_TYPES = {
  /** Controls the size */
  size: PropTypes.oneOf(TOOLTIP_SIZES),
  /** Controls the color */
  color: PropTypes.oneOf(TOOLTIP_COLORS),
  /** Controls the position relative to the target element  */
  position: PropTypes.oneOf(TOOLTIP_POSITION),
  /** Controls if has arrow or not */
  withArrow: PropTypes.bool,
  /** Choose if render this element in a Portal */
  withinPortal: PropTypes.bool,
};
