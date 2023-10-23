import PropTypes from 'prop-types';

export const ACTION_BUTTON_SIZES = ['sm', 'md'];
// export const ACTION_BUTTON_COLORS = ['primary', 'negative', 'phatic'];
export const ACTION_BUTTON_COLORS = ['primary'];

export const ACTION_BUTTON_DEFAULT_PROPS = {
  color: ACTION_BUTTON_COLORS[0],
  size: ACTION_BUTTON_SIZES[1],
  label: '',
  rounded: false,
  useAria: true,
  active: false,
};
export const ACTION_BUTTON_PROP_TYPES = {
  /** Controls the size */
  size: PropTypes.oneOf(ACTION_BUTTON_SIZES),
  /** Control the color */
  color: PropTypes.oneOf(ACTION_BUTTON_COLORS),
  /** Control the tooltip of the button */
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** Controls if ActionButton uses aria role */
  useAria: PropTypes.bool,
  /** Aria label for ActionButton */
  ariaLabel: PropTypes.string,
  /** Controls the visual state of the Button */
  active: PropTypes.bool,
};
