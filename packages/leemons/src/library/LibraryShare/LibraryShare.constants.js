import PropTypes from 'prop-types';

export const LIBRARY_SHARE_DEFAULT_PROPS = {};
export const LIBRARY_SHARE_PROP_TYPES = {
  labels: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
  }),
  placeholders: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.string,
  }),
  helps: PropTypes.shape({}),
  descriptions: PropTypes.shape({}),
  errorMessages: PropTypes.shape({
    name: PropTypes.string,
    file: PropTypes.string,
  }),
};
