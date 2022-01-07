import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Group, Box, Text } from '@mantine/core';
import { Dropzone as MantineDropzone } from '@mantine/dropzone';
import { FileUploadStyles } from './FileUpload.styles';
import { Stack } from '../../layout/Stack';
import { FileItemDisplay } from '../../informative/FileItemDisplay';
import { ActionButton } from '../../form/ActionButton';
import { DeleteBinIcon } from '@bubbles-ui/icons/solid/';
import { SynchronizeArrowIcon } from '@bubbles-ui/icons/outline';
import { Alert } from '../../feedback/Alert';
import { Button } from '../../form/Button';

export const FILE_UPLOAD_DEFAULT_PROPS = {
  disabled: false,
  loading: false,
  multiple: true,
  showError: false,
};

export const FILE_UPLOAD_PROP_TYPES = {
  icon: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  multiple: PropTypes.bool,
  onDrop: PropTypes.func,
  showError: PropTypes.bool,
  errorMessage: PropTypes.shape({
    title: PropTypes.string,
    message: PropTypes.string,
  }),
};

const FileUpload = ({
  icon,
  title,
  subtitle,
  disabled = false,
  onDrop,
  showError,
  errorMessage,
  ...props
}) => {
  const { classes, cx } = FileUploadStyles({}, { name: 'FileUpload' });
  const openRef = useRef();

  const [files, setFiles] = React.useState([]);
  const [error, setError] = React.useState(false);

  const onDropHandler = (acceptedFiles) => {
    if (onDrop) {
      onDrop(acceptedFiles);
    }
    setFiles([...files, ...acceptedFiles]);
    setError(false);
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
        openRef={openRef}
      >
        {(status) => {
          if (status.rejected) {
            setError(true);
          }
          return (
            <Group className={classes.groupContainer}>
              <Box className={classes.container}>
                <Box className={classes.icon}>{icon}</Box>
                <Text className={classes.title}>{title}</Text>
                <Text className={classes.subtitle}>{subtitle}</Text>
              </Box>
            </Group>
          );
        }}
      </MantineDropzone>
      {showError && error && (
        <Alert
          className={classes.errorAlert}
          title={errorMessage.title}
          variant={'block'}
          severity={'error'}
          onClose={() => setError(false)}
          onAction={() => openRef.current()}
          action={
            <>
              <SynchronizeArrowIcon /> <span style={{ marginLeft: 8 }}>Browse file again</span>
            </>
          }
        >
          {errorMessage.message}
        </Alert>
      )}
      {!!files.length && (
        <Stack className={classes.fileList} direction={'column'} fullWidth={true}>
          {files.map((file, index) => (
            <Box key={index} className={classes.droppedFile}>
              <FileItemDisplay filename={file.name} metadata={file} />
              <Box onClick={() => removeFile(index)}>
                <ActionButton icon={<DeleteBinIcon height={16} width={16} />} />
              </Box>
            </Box>
          ))}
        </Stack>
      )}
      <Box className={classes.uploadButton}>
        <Button onClick={() => openRef.current()}>Upload</Button>
      </Box>
    </Box>
  );
};

FileUpload.propTypes = FILE_UPLOAD_PROP_TYPES;

export { FileUpload };
