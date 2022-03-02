import PropTypes from 'prop-types';

export const LIBRARY_DETAIL_VARIANTS = ['media', 'task'];
export const LIBRARY_DETAIL_ROLES = ['owner', 'editor', 'commentor', 'viewer'];

export const LIBRARY_DETAIL_DEFAULT_PROPS = {};
export const LIBRARY_DETAIL_PROP_TYPES = {
  asset: PropTypes.shape({
    id: PropTypes.string,
    fileType: PropTypes.string,
    fileExtension: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    metadata: PropTypes.arrayOf(
      PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
    ),
    created: PropTypes.string,
    version: PropTypes.string,
    cover: PropTypes.string,
    color: PropTypes.string,
    url: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, name: PropTypes.string })),
    role: PropTypes.oneOf(LIBRARY_DETAIL_ROLES),
  }),
  variant: PropTypes.oneOf(LIBRARY_DETAIL_VARIANTS),
  onEdit: PropTypes.func,
  onDuplicate: PropTypes.func,
  onDownload: PropTypes.func,
  onDelete: PropTypes.func,
  onShare: PropTypes.func,
  onAssign: PropTypes.func,
};
