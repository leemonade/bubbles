import React from 'react';
import { isFunction } from 'lodash';
import { Box, IconButton, ActionButton } from '@bubbles-ui/components';
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
        <ActionButton
          icon={<EditWriteIcon height={20} width={20} />}
          onClick={handleEdit}
          tooltip={toolbarItems.edit}
          className={classes.button}
        />
      )}
      {toolbarItems.duplicate && (
        <ActionButton
          icon={<DuplicateIcon height={20} width={20} />}
          onClick={handleDuplicate}
          tooltip={toolbarItems.duplicate}
          className={classes.button}
        />
      )}
      {toolbarItems.download && (
        <ActionButton
          icon={<CloudUploadIcon height={20} width={20} />}
          onClick={handleDownload}
          tooltip={toolbarItems.download}
          className={classes.button}
        />
      )}
      {toolbarItems.delete && (
        <ActionButton
          icon={<DeleteBinIcon height={20} width={20} />}
          onClick={handleDelete}
          tooltip={toolbarItems.delete}
          className={classes.button}
        />
      )}
      {toolbarItems.share && (
        <ActionButton
          icon={<PluginUsersIcon height={20} width={20} />}
          onClick={handleShare}
          tooltip={toolbarItems.share}
          className={classes.button}
        />
      )}
      {toolbarItems.assign && (
        <ActionButton
          icon={<PluginAssignmentsIcon height={20} width={20} />}
          onClick={handleAssign}
          tooltip={toolbarItems.assign}
          className={classes.button}
        />
      )}
      {toolbarItems.close && (
        <Box className={classes.lastIcon}>
          <ActionButton
            icon={<MoveRightIcon height={20} width={20} />}
            onClick={handleClose}
            tooltip={toolbarItems.close}
            className={classes.button}
          />
        </Box>
      )}
    </Box>
  );
};

LibraryDetailToolbar.defaultProps = LIBRARY_DETAIL_TOOLBAR_DEFAULT_PROPS;
LibraryDetailToolbar.propTypes = LIBRARY_DETAIL_TOOLBAR_PROP_TYPES;

export { LibraryDetailToolbar };
