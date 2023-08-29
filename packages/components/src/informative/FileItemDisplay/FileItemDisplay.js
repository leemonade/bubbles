import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { FileIcon } from '@bubbles-ui/icons/outline';
import { Text, TextClamp } from '../../typography';
import { Box } from '../../layout';
import { FileItemDisplayStyles } from './FileItemDisplay.styles';
import { Link } from 'react-router-dom';

export const FILE_ITEM_DISPLAY_DEFAULT_PROPS = {
  showFileName: true,
  size: 16,
  url: '',
  useRouter: false,
  filename: '',
  color: '',
  iconStyle: {},
  noBreak: false,
};
export const FILE_ITEM_DISPLAY_PROP_TYPES = {
  filename: PropTypes.string,
  hideExtension: PropTypes.bool,
  description: PropTypes.string,
  metadata: PropTypes.object,
  showFileName: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  url: PropTypes.string,
  useRouter: PropTypes.bool,
  noBreak: PropTypes.bool,
};

const FileItemDisplay = ({
  filename,
  description,
  metadata,
  showFileName,
  size,
  color,
  hideExtension,
  url,
  iconStyle,
  useRouter,
  noBreak,
  ...props
}) => {
  const calculatedSize = size / 3;
  const hasURLandRouter = useRouter && url;
  const hasExtension = filename.split('.').length > 1 && filename.split('.').pop() !== '';
  const linkProps = url && !useRouter ? { as: 'a', href: url, target: '_blank' } : {};
  let fileExtension = '';

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

  const { classes, cx } = FileItemDisplayStyles(
    {
      size,
      calculatedSize,
      color,
      url,
      iconStyle,
    },
    { name: 'FileItemDisplay' }
  );
  const fileItemDisplay = (
    <Box className={classes.root} {...props}>
      <Box className={classes.iconWrapper}>
        <Text strong className={classes.iconFiletype}>
          {fileExtension || 'FILE'}
        </Text>
        <FileIcon height={size} width={size} className={classes.icon} />
      </Box>
      {showFileName && name && (
          <TextClamp lines={noBreak ? 1 : 100}>
            <Text {...linkProps} className={classes.filename}>
              {name}
            </Text>
          </TextClamp>
      )}
    </Box>
  );

  return hasURLandRouter ? <Link to={url}>{fileItemDisplay}</Link> : fileItemDisplay;
};

FileItemDisplay.defaultProps = FILE_ITEM_DISPLAY_DEFAULT_PROPS;
FileItemDisplay.propTypes = FILE_ITEM_DISPLAY_PROP_TYPES;

export { FileItemDisplay };
