import PropTypes from 'prop-types';

export const LIBRARY_DETAIL_CONTENT_DEFAULT_PROPS = {};
export const LIBRARY_DETAIL_CONTENT_PROP_TYPES = {
  id: PropTypes.string,
  fileType: PropTypes.string,
  fileExtension: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  metadata: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
  ),
  tags: PropTypes.arrayOf(PropTypes.string),
};
