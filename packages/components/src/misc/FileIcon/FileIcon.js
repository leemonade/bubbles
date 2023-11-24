import React from 'react';
import PropTypes from 'prop-types';
import {
  // AssetBookmarkIcon,
  AssetPathIcon,
  // AssetTaskIcon,
  // MeetingCameraIcon,
  PluginCurriculumIcon,
  // VolumeControlMediumIcon,
} from '@bubbles-ui/icons/solid/';
import { FileIconStyles } from './FileIcon.styles';
import { Box } from '../../layout/Box';
import { Text } from '../../typography/Text';
import { AssetVideoIcon } from './AssetVideoIcon';
import { FileItemDisplay } from '../../informative/FileItemDisplay';
import { AssetAudioIcon } from './AssetAudioIcon';
import { AssetImageIcon } from './AssetImageIcon';
import { AssetBookmarkIcon } from './AssetBookmarkIcon';

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
  iconStyle: PropTypes.object,
};

const FileIcon = ({ fileType, fileExtension, label, size, color, iconStyle, ...props }) => {
  const { classes } = FileIconStyles({ size, color });

  const FileTypeIcon = [
    { key: 'video', value: <AssetVideoIcon height={size} width={size} color={color} /> },
    { key: 'audio', value: <AssetAudioIcon height={size} width={size} color={color} /> },
    { key: 'image', value: <AssetImageIcon height={size} width={size} color={color} /> },
    { key: 'bookmark', value: <AssetBookmarkIcon height={size} width={size} color={color} /> },
    { key: 'path', value: <AssetPathIcon height={size} width={size} /> },
    { key: 'curriculum', value: <PluginCurriculumIcon height={size} width={size} /> },
    // { key: 'tests', value: <PluginTestIcon height={size} width={size} /> },
    // { key: 'questionBank', value: <PluginTestIcon height={size} width={size} /> },
    // { key: 'feedback', value: <PluginFeedbackIcon height={size} width={size} /> },
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
          {...props}
          filename={`${label || ''}${fileExtension ? `.${fileExtension}` : ''}`}
          size={18}
          showFileName={!!label}
          color={color}
          iconStyle={iconStyle}
        />
      )}
    </Box>
  );
};

FileIcon.defaultProps = FILE_ICON_DEFAULT_PROPS;
FileIcon.propTypes = FILE_ICON_PROP_TYPES;

export { FileIcon };
