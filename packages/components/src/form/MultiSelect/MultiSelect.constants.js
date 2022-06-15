import PropTypes from 'prop-types';

import {
  INPUT_WRAPPER_ORIENTATIONS,
  INPUT_WRAPPER_SHARED_PROPS,
  INPUT_WRAPPER_SIZES,
} from '../InputWrapper';

export const MULTI_SELECT_SIZES = INPUT_WRAPPER_SIZES;
export const MULTI_SELECT_ORIENTATIONS = INPUT_WRAPPER_ORIENTATIONS;

export const MULTI_SELECT_DEFAULT_PROPS = {
  label: '',
  description: '',
  placeholder: '',
  help: '',
  required: false,
  error: '',
  orientation: 'vertical',
  size: 'sm',
  disabled: false,
  searchable: false,
  creatable: false,
  clearable: '',
  readOnly: false,
  multiple: true,
};

export const MULTI_SELECT_PROP_TYPES = {
  ...INPUT_WRAPPER_SHARED_PROPS,
  data: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  data: PropTypes.any,
  size: PropTypes.oneOf(MULTI_SELECT_SIZES),
  orientation: PropTypes.oneOf(MULTI_SELECT_ORIENTATIONS),
  searchable: PropTypes.bool,
  clearable: PropTypes.string,
  creatable: PropTypes.bool,
  multiple: PropTypes.bool,
  maxSelectedValues: PropTypes.number,
  readOnly: PropTypes.bool,
};
