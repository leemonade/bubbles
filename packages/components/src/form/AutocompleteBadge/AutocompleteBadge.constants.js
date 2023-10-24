import PropTypes from 'prop-types';
import { INPUT_WRAPPER_SIZES } from '../InputWrapper';

export const AUTOCOMPLETEBADGE_DEFAULT_PROPS = {};
export const AUTOCOMPLETEBADGE_PROP_TYPES = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.shape({ value: PropTypes.string.isRequired, label: PropTypes.string })
    ),
  ]).isRequired,
  itemPadding: PropTypes.number,
  nothingFoundLabel: PropTypes.string,
  size: PropTypes.oneOf(INPUT_WRAPPER_SIZES),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onItemSubmit: PropTypes.func,
  avatar: PropTypes.node,
  name: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.shape({ value: PropTypes.string.isRequired, label: PropTypes.string })
    ),
  ]),
  onRemove: PropTypes.func,
};
