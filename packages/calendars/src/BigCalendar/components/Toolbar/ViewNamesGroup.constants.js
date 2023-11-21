import PropTypes from 'prop-types';

export const VIEWNAMESGROUP_PROPTYPES = {
  messages: PropTypes.object,
  views: PropTypes.arrayOf(PropTypes.string),
  current: PropTypes.string,
  onChange: PropTypes.func,
  classes: PropTypes.object,
};

export const VIEWNAMESGROUP_DEFAULT_PROPS = {};
