import PropTypes from 'prop-types';
import { ASSET_PROPS, LIBRARYCARD_VARIANTS } from '../LibraryCard/LibraryCard.constants';

export const LIBRARY_DETAIL_VARIANTS = LIBRARYCARD_VARIANTS;
export const LIBRARY_DETAIL_ROLES = ['owner', 'editor', 'commentor', 'viewer'];

export const LIBRARY_DETAIL_DEFAULT_PROPS = {
  toolbarItems: {
    edit: 'Edit',
    duplicate: 'Duplicate',
    download: 'Download',
    delete: 'Delete',
    share: 'Share',
    assign: 'Assign',
    toggle: 'Toggle',
  },
  drawer: true,
  toolbar: true,
  open: true,
  labels: {
    copy: 'Copy',
    copied: 'Copied',
    sharedWith: 'Shared with',
    sharedViewAll: 'View all',
    sharedWithEverybody: 'Shared with everybody',
  },
};
export const LIBRARY_DETAIL_PROP_TYPES = {
  asset: ASSET_PROPS,
  variant: PropTypes.oneOf(LIBRARY_DETAIL_VARIANTS),
  toolbarItems: PropTypes.any,
  onEdit: PropTypes.func,
  onDuplicate: PropTypes.func,
  onDownload: PropTypes.func,
  onDelete: PropTypes.func,
  onShare: PropTypes.func,
  onAssign: PropTypes.func,
  drawer: PropTypes.bool,
  toolbar: PropTypes.bool,
  open: PropTypes.bool,
  labels: PropTypes.any,
};
