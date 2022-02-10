import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { FileIcon } from '@bubbles-ui/icons/outline';
import { Text } from '../../typography';
import { Box } from '../../layout';
import { FileItemDisplayStyles } from './FileItemDisplay.styles';

export const FILE_ITEM_DISPLAY_DEFAULT_PROPS = {
  showFileName: true,
  size: 16,
  colorStyle: {},
  iconStyle: {},
};
export const FILE_ITEM_DISPLAY_PROP_TYPES = {
  filename: PropTypes.string,
  hideExtension: PropTypes.bool,
  description: PropTypes.string,
  metadata: PropTypes.object,
  showFileName: PropTypes.bool,
  size: PropTypes.number,
  colorStyle: PropTypes.object,
  iconStyle: PropTypes.object,
};

const FileItemDisplay = ({
  filename,
  description,
  metadata,
  showFileName,
  size,
  colorStyle,
  iconStyle,
  hideExtension,
  ...props
}) => {
  const calculatedSize = size / 3;

  const { classes, cx } = FileItemDisplayStyles({
    size,
    calculatedSize,
    colorStyle,
    iconStyle,
  });

  let fileExtension = '';

  const hasExtension = filename.split('.').length > 1 && filename.split('.').pop() !== '';

  if (hasExtension) {
    fileExtension = filename.split('.').pop();
  } else {
    fileExtension = 'file';
  }

  const name = useMemo(() => {
    if (hasExtension && hideExtension) {
      const chunks = filename.split('.');
      chunks.pop();
      return chunks.join('.');
    }
    return filename;
  }, [filename, hideExtension, hasExtension]);

  return (
    <Box className={classes.root} {...props}>
      <Box className={classes.iconWrapper}>
        <Text strong className={classes.iconFiletype}>
          {fileExtension}
        </Text>
        <FileIcon height={size} width={size} className={classes.icon} />
      </Box>
      {showFileName && <Text className={classes.filename}>{name}</Text>}
    </Box>
  );
};

FileItemDisplay.defaultProps = FILE_ITEM_DISPLAY_DEFAULT_PROPS;
FileItemDisplay.propTypes = FILE_ITEM_DISPLAY_PROP_TYPES;

export { FileItemDisplay };
