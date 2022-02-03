import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { FileIcon } from '@bubbles-ui/icons/outline';
import { Text } from '../../typography';
import { FileItemDisplayStyles } from './FileItemDisplay.styles';

export const FILE_ITEM_DISPLAY_DEFAULT_PROPS = {
  showFileName: true,
  size: 16,
};
export const FILE_ITEM_DISPLAY_PROP_TYPES = {
  filename: PropTypes.string,
  description: PropTypes.string,
  metadata: PropTypes.object,
  showFileName: PropTypes.bool,
  size: PropTypes.number,
  colorStyle: PropTypes.object,
};

const FileItemDisplay = ({
  filename,
  description,
  metadata,
  showFileName,
  size,
  colorStyle,
  ...props
}) => {
  const calculatedSize = size / 3;

  const { classes, cx } = FileItemDisplayStyles({ size, calculatedSize, colorStyle });

  let fileExtension = '';

  const hasExtension = filename.split('.').length > 1 && filename.split('.').pop() !== '';

  if (hasExtension) {
    fileExtension = filename.split('.').pop();
  } else {
    fileExtension = 'file';
  }

  return (
    <Box className={classes.root} {...props}>
      <Box className={classes.iconWrapper}>
        <Text strong className={classes.iconFiletype}>
          {fileExtension}
        </Text>
        <FileIcon height={size} width={size} className={classes.icon} />
      </Box>
      {showFileName && <Text className={classes.filename}>{filename}</Text>}
    </Box>
  );
};

FileItemDisplay.defaultProps = FILE_ITEM_DISPLAY_DEFAULT_PROPS;

FileItemDisplay.propTypes = FILE_ITEM_DISPLAY_PROP_TYPES;

export { FileItemDisplay };
