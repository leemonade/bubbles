import React, { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { Group, Text } from '@mantine/core';
import { Dropzone as MantineDropzone } from '@mantine/dropzone';
import { FileUploadStyles } from './FileUpload.styles';
import { Stack, Box } from '../../layout/';
import { FileItemDisplay } from '../../informative/FileItemDisplay';
import { Alert } from '../../feedback/Alert';
import { InputWrapper, INPUT_WRAPPER_PROP_TYPES, ActionButton, Button } from '../../form';
import { DeleteBinIcon } from '@bubbles-ui/icons/solid/';
import { SynchronizeArrowIcon } from '@bubbles-ui/icons/outline';
import { isEmpty, isFunction } from 'lodash';

export const FILE_UPLOAD_DEFAULT_PROPS = {
  disabled: false,
  loading: false,
  multiple: true,
  showError: false,
  hideUploadButton: false,
  single: false,
  initialFiles: [],
  inputWrapperProps: {},
};

export const FILE_UPLOAD_PROP_TYPES = {
  icon: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  multipleUpload: PropTypes.bool,
  onChange: PropTypes.func,
  showError: PropTypes.bool,
  errorMessage: PropTypes.shape({
    title: PropTypes.string,
    message: PropTypes.string,
  }),
  hideUploadButton: PropTypes.bool,
  single: PropTypes.bool,
  inputWrapperProps: PropTypes.shape(INPUT_WRAPPER_PROP_TYPES),
  initialFiles: PropTypes.arrayOf(PropTypes.object),
};

const FileUpload = ({
  icon,
  title,
  subtitle,
  disabled = false,
  loading,
  multipleUpload,
  onChange,
  showError,
  errorMessage,
  hideUploadButton,
  single,
  inputWrapperProps,
  initialFiles,
  ...props
}) => {
  const openRef = useRef();
  const [files, setFiles] = React.useState(initialFiles || []);
  const [error, setError] = React.useState(false);
  const hasError = useMemo(() => !isEmpty(inputWrapperProps.error), [inputWrapperProps.error]);

  const onDropHandler = (acceptedFiles) => {
    const newFiles = [...files, ...acceptedFiles];
    isFunction(onChange) && onChange(newFiles.length === 1 ? newFiles[0] : newFiles);
    setFiles(newFiles);
    setError(false);
  };

  const removeFile = (index) => {
    const newFiles = files.filter((file, fileIndex) => fileIndex !== index);
    isFunction(onChange) && onChange(newFiles.length === 1 ? newFiles[0] : newFiles);
    setFiles(newFiles);
  };

  const { classes, cx } = FileUploadStyles(
    { disabled, single, files, hasError },
    { name: 'FileUpload' }
  );
  return (
    <Box className={classes.wrapper}>
      <InputWrapper {...inputWrapperProps}>
        <MantineDropzone
          {...props}
          loading={loading}
          multiple={multipleUpload}
          onDrop={onDropHandler}
          classNames={classes}
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
      </InputWrapper>
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
      {!hideUploadButton && (
        <Box className={classes.uploadButton}>
          <Button onClick={() => openRef.current()}>Upload</Button>
        </Box>
      )}
    </Box>
  );
};

FileUpload.propTypes = FILE_UPLOAD_PROP_TYPES;

export { FileUpload };
