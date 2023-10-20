import PropTypes from 'prop-types';

export const TOOLTIPCOMPONENT_DEFAULT_PROPS = {
  children: '',
  tooltip: '',
  useAria: true,
};

export const TOOLTIPCOMPONENT_PROP_TYPES = {
  children: PropTypes.node,
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  useAria: PropTypes.bool,
};
