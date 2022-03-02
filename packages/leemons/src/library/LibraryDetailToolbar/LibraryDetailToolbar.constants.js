import PropTypes from 'prop-types';

export const LIBRARY_DETAIL_TOOLBAR_DEFAULT_PROPS = {};
export const LIBRARY_DETAIL_TOOLBAR_PROP_TYPES = {
  id: PropTypes.string,
  onEdit: PropTypes.func,
  onDuplicate: PropTypes.func,
  onDownload: PropTypes.func,
  onDelete: PropTypes.func,
  onShare: PropTypes.func,
  onAssign: PropTypes.func,
};
