import PropTypes from 'prop-types';

export const CONTEXT_HELP_DEFAULT_PROPS = {
  title: '',
  content: '',
  link: '',
};
export const CONTEXT_HELP_PROP_TYPES = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  link: PropTypes.string,
  onLink: PropTypes.func,
};
