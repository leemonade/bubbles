import React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton } from '@bubbles-ui/components';
import { EditWriteIcon, DeleteBinIcon, PluginUsersIcon } from '@bubbles-ui/icons/solid/';
import {
  DuplicateIcon,
  CloudUploadIcon,
  PluginAssignmentsIcon,
  MoveRightIcon,
} from '@bubbles-ui/icons/outline';
import { LibraryDetailToolbarStyles } from './LibraryDetailToolbar.styles';

export const LIBRARY_DETAIL_TOOLBAR_DEFAULT_PROPS = {};
export const LIBRARY_DETAIL_TOOLBAR_PROP_TYPES = {};

const LibraryDetailToolbar = ({ ...props }) => {
  const { classes, cx } = LibraryDetailToolbarStyles({}, { name: 'LibraryDetailToolbar' });

  return (
    <Box className={classes.root}>
      <IconButton size={'xs'} icon={<EditWriteIcon height={20} width={20} />} />
      <IconButton size={'xs'} icon={<DuplicateIcon height={20} width={20} />} />
      <IconButton size={'xs'} icon={<CloudUploadIcon height={20} width={20} />} />
      <IconButton size={'xs'} icon={<DeleteBinIcon height={20} width={20} />} />
      <IconButton size={'xs'} icon={<PluginUsersIcon height={20} width={20} />} />
      <IconButton size={'xs'} icon={<PluginAssignmentsIcon height={20} width={20} />} />
      <Box className={classes.lastIcon}>
        <IconButton size={'xs'} icon={<MoveRightIcon height={20} width={20} />} />
      </Box>
    </Box>
  );
};

LibraryDetailToolbar.defaultProps = LIBRARY_DETAIL_TOOLBAR_DEFAULT_PROPS;
LibraryDetailToolbar.propTypes = LIBRARY_DETAIL_TOOLBAR_PROP_TYPES;

export { LibraryDetailToolbar };
