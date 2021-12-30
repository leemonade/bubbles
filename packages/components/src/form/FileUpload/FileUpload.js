import React from 'react';
import PropTypes from 'prop-types';
import { Group, Box, Text } from '@mantine/core';
import { Dropzone as MantineDropzone } from '@mantine/dropzone';
import { FileUploadStyles } from './FileUpload.styles';
import { Stack } from '../../layout/Stack';
import { FileItemDisplay } from '../../informative/FileItemDisplay';
import { ActionButton } from '../../form/ActionButton';
import { DeleteBinIcon } from '@bubbles-ui/icons/solid/';

const FileUpload = ({ icon, title, subtitle, disabled = false, onDrop, ...props }) => {
  const { classes, cx } = FileUploadStyles({}, { name: 'FileUpload' });

  const [files, setFiles] = React.useState([]);

  const onDropHandler = (acceptedFiles) => {
    setFiles([...files, ...acceptedFiles]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((file, fileIndex) => fileIndex !== index));
  };

  return (
    <Box className={classes.wrapper}>
      <MantineDropzone
        onDrop={onDropHandler}
        {...props}
        classNames={classes}
        className={disabled ? classes.disabled : null}
      >
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
      {!!files.length && (
        <Stack className={classes.fileList} direction={'column'} fullWidth={true}>
          {files.map((file, index) => (
            <Box key={index} className={classes.droppedFile}>
              <FileItemDisplay filename={file.name} />
              <Box onClick={() => removeFile(index)}>
                <ActionButton icon={<DeleteBinIcon height={16} width={16} />} />
              </Box>
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
};

FileUpload.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onDrop: PropTypes.func,
};

export { FileUpload };
