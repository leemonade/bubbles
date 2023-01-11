import PropTypes from 'prop-types';

export const INPUT_LABEL_DEFAULT_PROPS = {
  label: '',
  description: '',
  withDescriptionIcon: false,
  required: false,
};
export const INPUT_LABEL_PROP_TYPES = {
  label: PropTypes.string,
  description: PropTypes.string,
  withDescriptionIcon: PropTypes.bool,
  required: PropTypes.bool,
};
