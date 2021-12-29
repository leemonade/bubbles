import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { FileItemDisplayStyles } from './FileItemDisplay.styles';
import { FileIcon } from '@bubbles-ui/icons/outline';

export const FILE_ITEM_DISPLAY_DEFAULT_PROPS = {};
export const FILE_ITEM_DISPLAY_PROP_TYPES = {
  filename: PropTypes.string,
  description: PropTypes.string,
  metadata: PropTypes.object,
  filetype: PropTypes.string,
};

const FileItemDisplay = ({ filename, description, metadata, ...props }) => {
  const { classes, cx } = FileItemDisplayStyles({});

  const fileExtension = filename.split('.').pop();

  return (
    <Box className={classes.root} {...props}>
      <span className={classes.iconFiletype}>{fileExtension}</span>
      <FileIcon height={24} width={24} className={classes.icon} />
      <span className={classes.filename}>{filename}</span>
    </Box>
  );
};

FileItemDisplay.defaultProps = FILE_ITEM_DISPLAY_DEFAULT_PROPS;

FileItemDisplay.propTypes = FILE_ITEM_DISPLAY_PROP_TYPES;

export { FileItemDisplay };
