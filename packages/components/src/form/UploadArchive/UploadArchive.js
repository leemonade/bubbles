import React from 'react';
import PropTypes from 'prop-types';
import { Group, Box, Text } from '@mantine/core';
import { Dropzone as MantineDropzone } from '@mantine/dropzone';
import { UploadArchiveStyles } from './UploadArchive.styles';

const UploadArchive = ({ icon, title, subtitle, disabled = false, ...props }) => {
  const { classes, cx } = UploadArchiveStyles({}, { name: 'UploadArchive' });

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

UploadArchive.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export { UploadArchive };
