import PropTypes from 'prop-types';
import {
  INPUT_WRAPPER_DEFAULT_PROPS,
  INPUT_WRAPPER_PROP_TYPES,
} from '../InputWrapper/InputWrapper.constants';

export const TAGS_INPUT_DEFAULT_PROPS = {
  ...INPUT_WRAPPER_DEFAULT_PROPS,
  value: [],
  suggestions: [],
  labels: {
    addButton: '',
  },
  placeholder: '',
  waitToSearch: 1000,
};
export const TAGS_INPUT_PROP_TYPES = {
  ...INPUT_WRAPPER_PROP_TYPES,
  labels: PropTypes.shape({
    addButton: PropTypes.string,
  }),
  placeholder: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  suggestions: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  waitToSearch: PropTypes.number,
};
