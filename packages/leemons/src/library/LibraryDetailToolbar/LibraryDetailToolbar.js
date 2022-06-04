import React from 'react';
import { isFunction } from 'lodash';
import { ActionButton, Box, Stack } from '@bubbles-ui/components';
import {
  DeleteBinIcon,
  EditWriteIcon,
  PluginKimIcon as PluginKimSolidIcon,
  PluginUsersIcon,
} from '@bubbles-ui/icons/solid';
import {
  AssignIcon,
  DownloadDrawerIcon,
  DuplicateIcon,
  MoveRightIcon,
  PluginKimIcon,
  ViewOnIcon,
} from '@bubbles-ui/icons/outline';
import { LibraryDetailToolbarStyles } from './LibraryDetailToolbar.styles';
import {
  LIBRARY_DETAIL_TOOLBAR_DEFAULT_PROPS,
  LIBRARY_DETAIL_TOOLBAR_PROP_TYPES,
} from './LibraryDetailToolbar.constants';

const LibraryDetailToolbar = ({
  item,
  open,
  onView,
  onEdit,
  onDuplicate,
  onDownload,
  onDelete,
  onShare,
  onAssign,
  onToggle,
  onPin,
  onUnpin,
  toolbarItems,
  ...props
}) => {
  const { classes, cx } = LibraryDetailToolbarStyles({}, { name: 'LibraryDetailToolbar' });

  const handleView = () => {
    isFunction(onView) && onView(item);
  };

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

  const handlePin = () => {
    isFunction(onPin) && onPin(item);
  };

  const handleUnpin = () => {
    isFunction(onUnpin) && onUnpin(item);
  };

  const handleToggle = () => {
    isFunction(onToggle) && onToggle();
  };

  return (
    <Box className={classes.root}>
      {open && (
        <Stack>
          {toolbarItems.view && (
            <ActionButton
              icon={<ViewOnIcon height={20} width={20} />}
              onClick={handleView}
              tooltip={toolbarItems.view}
              className={classes.button}
            />
          )}
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
              icon={<DownloadDrawerIcon height={20} width={20} />}
              onClick={handleDownload}
              tooltip={toolbarItems.download}
              className={classes.button}
            />
          )}
          {toolbarItems.assign && (
            <ActionButton
              icon={<AssignIcon height={20} width={20} />}
              onClick={handleAssign}
              tooltip={toolbarItems.assign}
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
          {toolbarItems.pin && (
            <ActionButton
              icon={<PluginKimIcon height={20} width={20} />}
              onClick={handlePin}
              tooltip={toolbarItems.pin}
              className={classes.button}
            />
          )}
          {toolbarItems.unpin && (
            <ActionButton
              icon={<PluginKimSolidIcon height={20} width={20} />}
              active
              variant="solid"
              onClick={handleUnpin}
              tooltip={toolbarItems.unpin}
              className={classes.button}
            />
          )}
        </Stack>
      )}

      {toolbarItems.toggle && (
        <Box className={classes.lastIcon}>
          <ActionButton
            icon={<MoveRightIcon height={20} width={20} />}
            onClick={handleToggle}
            tooltip={toolbarItems.toggle}
            className={cx(classes.button, { [classes.flip]: !open })}
          />
        </Box>
      )}
    </Box>
  );
};

LibraryDetailToolbar.defaultProps = LIBRARY_DETAIL_TOOLBAR_DEFAULT_PROPS;
LibraryDetailToolbar.propTypes = LIBRARY_DETAIL_TOOLBAR_PROP_TYPES;

export { LibraryDetailToolbar };
