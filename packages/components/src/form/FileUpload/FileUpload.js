import React, { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { Group, Text } from '@mantine/core';
import { Dropzone as MantineDropzone } from '@mantine/dropzone';
import { SynchronizeArrowIcon, RemoveCircleIcon, CheckCircleIcon } from '@bubbles-ui/icons/outline';
import { DeleteBinIcon } from '@bubbles-ui/icons/solid';
import { isEmpty, isFunction } from 'lodash';
import { FileUploadStyles } from './FileUpload.styles';
import { Stack, Box } from '../../layout';
import { FileItemDisplay } from '../../informative/FileItemDisplay';
import { Alert } from '../../feedback/Alert';
import { InputWrapper, INPUT_WRAPPER_PROP_TYPES } from '../InputWrapper';
import { Button } from '../Button';
import { Loader } from '../../../lib/feedback/Loader/Loader';

function getRemoveButtonLabel(label) {
  // return label or "Remove" in brower language
  return label || navigator.language === 'es' ? 'Borrar' : 'Remove';
}

function getUploadButtonLabel(label) {
  // return label or "Upload" in brower language
  return label || navigator.language === 'es' ? 'Subir' : 'Upload';
}

export const FILE_UPLOAD_DEFAULT_PROPS = {
  disabled: false,
  loading: false,
  multipleUpload: true,
  showError: false,
  hideUploadButton: false,
  single: false,
  initialFiles: [],
  inputWrapperProps: {},
  useAria: true,
  fullWidth: false,
  labels: {},
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
  labels: PropTypes.shape({
    removeButton: PropTypes.string,
    uploadButton: PropTypes.string,
  }),
  hideUploadButton: PropTypes.bool,
  single: PropTypes.bool,
  inputWrapperProps: PropTypes.shape(INPUT_WRAPPER_PROP_TYPES),
  initialFiles: PropTypes.arrayOf(PropTypes.object),
  accept: PropTypes.arrayOf(PropTypes.string),
  useAria: PropTypes.bool,
  fullWidth: PropTypes.bool,
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
  inputWrapperProps = {},
  initialFiles,
  accept,
  useAria,
  labels,
  fullWidth,
  ...props
}) => {
  const openRef = useRef();
  const [files, setFiles] = React.useState(initialFiles || []);
  const [error, setError] = React.useState(false);
  const hasError = useMemo(() => !isEmpty(inputWrapperProps.error), [inputWrapperProps.error]);

  const onDropHandler = (acceptedFiles) => {
    const newFiles = [...files, ...acceptedFiles];
    if (isFunction(onChange)) onChange(newFiles.length === 1 ? newFiles[0] : newFiles);
    setFiles(newFiles);
    setError(false);
  };

  const removeFile = (index) => {
    const newFiles = files.filter((file, fileIndex) => fileIndex !== index);
    if (isFunction(onChange)) onChange(newFiles.length === 1 ? newFiles[0] : newFiles);
    setFiles(newFiles);
  };

  const removeFiles = () => {
    if (files && files.length > 0) {
      setFiles([]);
    }
  };

  React.useEffect(() => {
    if (!initialFiles || (initialFiles && initialFiles.length === 0)) {
      removeFiles();
    } else {
      setFiles(initialFiles);
    }
  }, [initialFiles]);

  const { classes, theme } = FileUploadStyles(
    { disabled, single, files, hasError, fullWidth },
    { name: 'FileUpload' },
  );

  const getFileUrl = (file) => {
    if ('File' in window && file instanceof File && file.type.indexOf('image') >= 0) {
      return URL.createObjectURL(file);
    }
    if (file?.url && file?.type?.indexOf('image') >= 0) {
      return file.url;
    }

    return null;
  };

  return (
    <Box className={classes.wrapper}>
      <InputWrapper {...inputWrapperProps}>
        <MantineDropzone
          {...props}
          accept={accept}
          loading={loading}
          disabled={disabled || loading}
          multiple={multipleUpload}
          onDrop={onDropHandler}
          classNames={classes}
          openRef={openRef}
          onReject={() => setError(true)}
        >
          <Group className={classes.groupContainer}>
            <Box className={classes.container}>
              <Box className={classes.icon}>{icon}</Box>
              <Text className={classes.title}>{title}</Text>
              <Text className={classes.subtitle}>{subtitle}</Text>
            </Box>
          </Group>
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
          useAria={useAria}
        >
          {errorMessage.message}
        </Alert>
      )}
      {files.length > 0 && (
        <Stack spacing={4} className={classes.fileList} direction={'column'}>
          {files.map((file, index) => (
            <Stack
              key={`${file.name}-${index}`}
              alignItems="center"
              spacing={4}
              className={classes.droppedFile}
            >
              <Stack
                className={classes.fileItemDisplay}
                spacing={4}
                justifyContent="space-between"
                alignItems="center"
              >
                <FileItemDisplay
                  iconSize={20}
                  filename={file.name}
                  thumbnailUrl={getFileUrl(file)}
                />
                {file.status === 'loading' && (
                  <Box sx={{ position: 'relative', width: 20, height: 20, minWidth: 20 }}>
                    <Box
                      sx={{
                        position: 'absolute',
                        left: -1,
                        top: -7.5,
                        width: 45,

                        height: 40,
                      }}
                    >
                      <Loader />
                    </Box>
                  </Box>
                )}
                {file.status === 'success' && (
                  <Box sx={{ width: 20, height: 20 }}>
                    <CheckCircleIcon
                      color={theme.other.core.color.success['500']}
                      width={20}
                      height={20}
                    />
                  </Box>
                )}
                {file.status === 'error' && (
                  <Box sx={{ width: 20, height: 20 }}>
                    <RemoveCircleIcon
                      color={theme.other.core.color.danger['500']}
                      width={20}
                      height={20}
                    />
                  </Box>
                )}
              </Stack>
              {!disabled && (
                <Box noFlex>
                  <Button
                    disabled={disabled}
                    onClick={() => removeFile(index)}
                    variant="link"
                    leftIcon={<DeleteBinIcon height={18} width={18} />}
                  >
                    {getRemoveButtonLabel(labels?.removeButton)}
                  </Button>
                </Box>
              )}
            </Stack>
          ))}
        </Stack>
      )}
      {!hideUploadButton && (
        <Box className={classes.uploadButton}>
          <Button onClick={() => openRef.current()} disabled={disabled || loading}>
            {getUploadButtonLabel(labels?.uploadButton)}
          </Button>
        </Box>
      )}
    </Box>
  );
};

FileUpload.propTypes = FILE_UPLOAD_PROP_TYPES;

export { FileUpload };
