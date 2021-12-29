import React from 'react';
import PropTypes from 'prop-types';
import { Group, Box, Text } from '@mantine/core';
import { Dropzone as MantineDropzone } from '@mantine/dropzone';
import { FileUploadStyles } from './FileUpload.styles';

const FileUpload = ({ icon, title, subtitle, disabled = false, ...props }) => {
  const { classes, cx } = FileUploadStyles({}, { name: 'FileUpload' });

  return (
    <MantineDropzone {...props} classNames={classes} className={disabled ? classes.disabled : null}>
      {(status) => (
        <Group className={classes.groupContainer}>
          <Box className={classes.container}>
            <Box className={classes.icon}>{icon}</Box>
            <Text className={classes.title}>{title}</Text>
            <Text className={classes.subtitle}>{subtitle}</Text>
          </Box>
        </Group>
      )}
    </MantineDropzone>
  );
};

FileUpload.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export { FileUpload };
