import React from 'react';
import PropTypes from 'prop-types';
import { FileIconStyles } from './FileIcon.styles';
import { Box } from '../../layout/';
import { Text } from '../../typography';
import { MeetingCameraIcon, VolumeControlMediumIcon } from '@bubbles-ui/icons/solid/';
import { FormImageAttachIcon } from '@bubbles-ui/icons/outline/';
import { FileItemDisplay } from '../../informative/';

export const FILE_ICON_DEFAULT_PROPS = {
  size: 16,
  fileExtension: '',
  label: '',
};
export const FILE_ICON_PROP_TYPES = {
  fileType: PropTypes.string,
  fileExtension: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

const FileIcon = ({ fileType, fileExtension, label, size, color }) => {
  const { classes, cx } = FileIconStyles({ size, color });

  const FileTypeIcon = [
    { key: 'video', value: <MeetingCameraIcon height={size} width={size} /> },
    { key: 'audio', value: <VolumeControlMediumIcon height={size} width={size} /> },
    { key: 'image', value: <FormImageAttachIcon height={size} width={size} /> },
  ];

  const fileIcon = FileTypeIcon.find(({ key }) => key === fileType);

  return (
    <Box className={classes.root}>
      {fileIcon ? (
        <>
          {fileIcon.value}
          {label && <Text className={classes.label}>{label}</Text>}
        </>
      ) : (
        <FileItemDisplay
          filename={`${label ? label : ''}${fileExtension ? '.' + fileExtension : ''}`}
          size={size}
          showFileName={label ? true : false}
          colorStyle={{ color: color }}
        />
      )}
    </Box>
  );
};

FileIcon.defaultProps = FILE_ICON_DEFAULT_PROPS;
FileIcon.propTypes = FILE_ICON_PROP_TYPES;

export { FileIcon };
