import PropTypes from 'prop-types';

export const HEADER_DROPDOWN_DEFAULT_PROPS = {
  data: [],
  placeholder: '',
  readOnly: false,
};
export const HEADER_DROPDOWN_PROP_TYPES = {
  data: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
  itemComponent: PropTypes.elementType,
  valueComponent: PropTypes.elementType,
  value: PropTypes.shape({ id: PropTypes.string }),
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  showIcon: PropTypes.bool,
};
