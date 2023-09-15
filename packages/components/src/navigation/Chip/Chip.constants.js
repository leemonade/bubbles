import PropTypes from 'prop-types';

export const CHIP_SIZES = ['menu', 'xs', 'sm', 'md'];
export const CHIP_VARIANTS = ['filled', 'outlined'];
export const CHIP_COLORS = ['primary', 'secondary'];
export const CHIP_RADIUS = ['xs', 'sm', 'md', 'lg', 'xl'];
export const CHIP_TYPE = ['checkbox', 'radio'];

export const CHIP_DEFAULT_PROPS = {
  checked: false,
  color: CHIP_COLORS[0],
  defaultChecked: false,
  onChange: () => {},
  radius: 'xl',
  size: CHIP_SIZES[1],
  type: 'checkbox',
  variant: CHIP_VARIANTS[0],
  wrapperProps: {},
  disabled: false,
  children: 'new',
};

export const CHIP_PROP_TYPES = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  radius: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  size: PropTypes.oneOf(['menu', 'xs', 'sm', 'md', 'lg', 'xl']),
  type: PropTypes.oneOf(['checkbox', 'radio']),
  variant: PropTypes.oneOf(['filled', 'outlined']),
  wrapperProps: PropTypes.object,
  disabled: PropTypes.bool,
};
