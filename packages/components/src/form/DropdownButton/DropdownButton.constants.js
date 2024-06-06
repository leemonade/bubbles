import PropTypes from 'prop-types';

export const DROPDOWN_BUTTON_DEFAULT_PROPS = {
  children: '',
  chevronUp: false,
  data: [],
  width: 'target',
};
export const DROPDOWN_BUTTON_PROP_TYPES = {
  children: PropTypes.node,
  data: PropTypes.array,
  chevronUp: PropTypes.bool,
  width: PropTypes.oneOf(['auto', 'target']),
};
