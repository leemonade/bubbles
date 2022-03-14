import PropTypes from 'prop-types';

export const LIBRARY_CARD_FOOTER_DEFAULT_PROPS = {};
export const LIBRARY_CARD_FOOTER_PROP_TYPES = {
  fileType: PropTypes.string,
  fileExtension: PropTypes.string,
  created: PropTypes.string,
  action: PropTypes.string,
  onAction: PropTypes.func,
  locale: PropTypes.string,
};
