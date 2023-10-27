import PropTypes from 'prop-types';

export const ICON_BUTTON_SIZES = ['xs', 'sm', 'md', 'lg'];
export const ICON_BUTTON_VARIANTS = ['default', 'transparent'];
export const ICON_BUTTON_COLORS = ['positive', 'negative', 'primary'];

export const ICON_BUTTON_DEFAULT_PROPS = {
  size: 'sm',
  color: 'positive',
  rounded: false,
  variant: 'default',
  label: '',
  useAria: true,
};

export const ICON_BUTTON_PROP_TYPES = {
  /** Controls the size */
  size: PropTypes.oneOf(ICON_BUTTON_SIZES),
  /** Controls the color */
  color: PropTypes.oneOf(ICON_BUTTON_COLORS),
  /** Controls if its rounded */
  rounded: PropTypes.bool,
  /** Controls the appearance */
  variant: PropTypes.oneOf(ICON_BUTTON_VARIANTS),
  /** Button label */
  label: PropTypes.string,
  /** Button icon */
  icon: PropTypes.node,
};
