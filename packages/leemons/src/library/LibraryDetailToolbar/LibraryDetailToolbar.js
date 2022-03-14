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
  id,
  onEdit,
  onDuplicate,
  onDownload,
  onDelete,
  onShare,
  onAssign,
  ...props
}) => {
  const { classes, cx } = LibraryDetailToolbarStyles({}, { name: 'LibraryDetailToolbar' });

  const handleEdit = () => {
    isFunction(onEdit) && onEdit(id);
  };

  const handleDuplicate = () => {
    isFunction(onDuplicate) && onDuplicate(id);
  };

  const handleDownload = () => {
    isFunction(onDownload) && onDownload(id);
  };

  const handleDelete = () => {
    isFunction(onDelete) && onDelete(id);
  };

  const handleShare = () => {
    isFunction(onShare) && onShare(id);
  };

  const handleAssign = () => {
    isFunction(onAssign) && onAssign(id);
  };

  return (
    <Box className={classes.root}>
      <IconButton
        size={'xs'}
        icon={<EditWriteIcon height={20} width={20} />}
        onClick={handleEdit}
      />
      <IconButton
        size={'xs'}
        icon={<DuplicateIcon height={20} width={20} />}
        onClick={handleDuplicate}
      />
      <IconButton
        size={'xs'}
        icon={<CloudUploadIcon height={20} width={20} />}
        onClick={handleDownload}
      />
      <IconButton
        size={'xs'}
        icon={<DeleteBinIcon height={20} width={20} />}
        onClick={handleDelete}
      />
      <IconButton
        size={'xs'}
        icon={<PluginUsersIcon height={20} width={20} />}
        onClick={handleShare}
      />
      <IconButton
        size={'xs'}
        icon={<PluginAssignmentsIcon height={20} width={20} />}
        onClick={handleAssign}
      />
      <Box className={classes.lastIcon}>
        <IconButton size={'xs'} icon={<MoveRightIcon height={20} width={20} />} />
      </Box>
    </Box>
  );
};

LibraryDetailToolbar.defaultProps = LIBRARY_DETAIL_TOOLBAR_DEFAULT_PROPS;
LibraryDetailToolbar.propTypes = LIBRARY_DETAIL_TOOLBAR_PROP_TYPES;

export { LibraryDetailToolbar };
