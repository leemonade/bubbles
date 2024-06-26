import PropTypes from 'prop-types';

export const ITEM_DEFAULT_PROPS = {
  disabled: false,
};
export const ITEM_PROP_TYPES = {
  label: PropTypes.string,
  image: PropTypes.string,
  icon: PropTypes.node,
  dataSelected: PropTypes.bool,
  group: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  disabled: PropTypes.bool,
};
