import PropTypes from 'prop-types';
import { INPUT_WRAPPER_SIZES, INPUT_WRAPPER_ORIENTATIONS } from '../InputWrapper';

export const SELECT_SIZES = INPUT_WRAPPER_SIZES;
export const SELECT_ORIENTATIONS = INPUT_WRAPPER_ORIENTATIONS;

export const SELECT_VARIANTS = ['default', 'filled', 'unstyled'];

export const SELECT_DEFAULT_PROPS = {
  size: 'sm',
  orientation: 'vertical',
  autoComplete: 'off',
  readOnly: false,
  variant: 'default',
  useAria: true,
};
export const SELECT_PROP_TYPES = {
  label: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.any,
  required: PropTypes.bool,
  size: PropTypes.oneOf(SELECT_SIZES),
  variant: PropTypes.oneOf(SELECT_VARIANTS),
  orientation: PropTypes.oneOf(SELECT_ORIENTATIONS),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  itemComponent: PropTypes.node,
  searchable: PropTypes.bool,
  clearable: PropTypes.string,
  nothingFound: PropTypes.any,
  disabled: PropTypes.bool,
  onDropdownOpen: PropTypes.func,
  onDropdownClose: PropTypes.func,
  style: PropTypes.object,
  autoComplete: PropTypes.string,
  readOnly: PropTypes.bool,
  useAria: PropTypes.bool,
};
