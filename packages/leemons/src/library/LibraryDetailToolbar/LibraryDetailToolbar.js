import React from 'react';
import { isFunction } from 'lodash';
import { Box, IconButton } from '@bubbles-ui/components';
import { EditWriteIcon, DeleteBinIcon, PluginUsersIcon } from '@bubbles-ui/icons/solid';
import {
  DuplicateIcon,
  CloudUploadIcon,
  PluginAssignmentsIcon,
  MoveRightIcon,
} from '@bubbles-ui/icons/outline';
import { LibraryDetailToolbarStyles } from './LibraryDetailToolbar.styles';
import {
  LIBRARY_DETAIL_TOOLBAR_DEFAULT_PROPS,
  LIBRARY_DETAIL_TOOLBAR_PROP_TYPES,
} from './LibraryDetailToolbar.constants';

const LibraryDetailToolbar = ({
  item,
  onEdit,
  onDuplicate,
  onDownload,
  onDelete,
  onShare,
  onAssign,
  onClose,
  toolbarItems,
  ...props
}) => {
  const { classes, cx } = LibraryDetailToolbarStyles({}, { name: 'LibraryDetailToolbar' });

  const handleEdit = () => {
    isFunction(onEdit) && onEdit(item);
  };

  const handleDuplicate = () => {
    isFunction(onDuplicate) && onDuplicate(item);
  };

  const handleDownload = () => {
    isFunction(onDownload) && onDownload(item);
  };

  const handleDelete = () => {
    isFunction(onDelete) && onDelete(item);
  };

  const handleShare = () => {
    isFunction(onShare) && onShare(item);
  };

  const handleAssign = () => {
    isFunction(onAssign) && onAssign(item);
  };

  const handleClose = () => {
    isFunction(onClose) && onClose(item);
  };

  return (
    <Box className={classes.root}>
      {toolbarItems.edit && (
        <IconButton
          size={'xs'}
          icon={<EditWriteIcon height={20} width={20} />}
          onClick={handleEdit}
        />
      )}
      {toolbarItems.duplicate && (
        <IconButton
          size={'xs'}
          icon={<DuplicateIcon height={20} width={20} />}
          onClick={handleDuplicate}
        />
      )}
      {toolbarItems.download && (
        <IconButton
          size={'xs'}
          icon={<CloudUploadIcon height={20} width={20} />}
          onClick={handleDownload}
        />
      )}
      {toolbarItems.delete && (
        <IconButton
          size={'xs'}
          icon={<DeleteBinIcon height={20} width={20} />}
          onClick={handleDelete}
        />
      )}
      {toolbarItems.share && (
        <IconButton
          size={'xs'}
          icon={<PluginUsersIcon height={20} width={20} />}
          onClick={handleShare}
        />
      )}
      {toolbarItems.assign && (
        <IconButton
          size={'xs'}
          icon={<PluginAssignmentsIcon height={20} width={20} />}
          onClick={handleAssign}
        />
      )}
      <Box className={classes.lastIcon}>
        <IconButton
          size={'xs'}
          icon={<MoveRightIcon height={20} width={20} />}
          onClick={handleClose}
        />
      </Box>
    </Box>
  );
};

LibraryDetailToolbar.defaultProps = LIBRARY_DETAIL_TOOLBAR_DEFAULT_PROPS;
LibraryDetailToolbar.propTypes = LIBRARY_DETAIL_TOOLBAR_PROP_TYPES;

export { LibraryDetailToolbar };
