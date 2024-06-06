import PropTypes from 'prop-types';

export const BUTTON_SIZES = ['sm', 'md'];
// export const BUTTON_VARIANTS = ['filled', 'outline', 'link', 'light'];
export const BUTTON_VARIANTS = ['filled', 'outline', 'link', 'linkInline'];
// export const BUTTON_COLORS = ['primary', 'secondary', 'terciary', 'phatic'];
export const BUTTON_COLORS = ['primary'];
// export const BUTTON_TEXT_ALIGN = ['left', 'center', 'right', 'appart'];
export const BUTTON_TEXT_ALIGN = ['center'];
export const BUTTON_DEFAULT_PROPS = {
  color: BUTTON_COLORS[0],
  size: BUTTON_SIZES[1],
  variant: BUTTON_VARIANTS[0],
  rounded: false,
  loading: false,
  fullWidth: false,
  disabled: false,
  textAlign: BUTTON_TEXT_ALIGN[0],
  useAria: true,
  isSelected: false,
};

export const BUTTON_PROP_TYPES = {
  /** Controls the button size. */
  size: PropTypes.string, // PropTypes.oneOf(BUTTON_SIZES),
  /** Controls the button colors. */
  color: PropTypes.oneOf(BUTTON_COLORS),
  /** Controls the button variants. */
  variant: PropTypes.oneOf(BUTTON_VARIANTS),
  /** Controls the space and position between elements inside the button */
  textAlign: PropTypes.oneOf(BUTTON_TEXT_ALIGN),
  /** Controls the border radius */
  rounded: PropTypes.bool,
  /** Controls if is loading */
  loading: PropTypes.bool,
  /** Adds icon before button label */
  leftIcon: PropTypes.node,
  /** Adds icon after button label, */
  rightIcon: PropTypes.node,
  /** Sets button width to 100% of parent element */
  fullWidth: PropTypes.bool,
  /** Controls if the button is compact */
  compact: PropTypes.bool,
  /** Controls the disabled state */
  disabled: PropTypes.bool,
  /** Controls if Button uses aria role */
  useAria: PropTypes.bool,
  /** Aria label for button */
  ariaLabel: PropTypes.string,
  /** Controls if Button is selected */
  isSelected: PropTypes.bool,
};
