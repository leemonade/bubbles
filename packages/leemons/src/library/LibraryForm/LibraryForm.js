import React, { useEffect, useState } from 'react';
import { isFunction, isEmpty, toLower } from 'lodash';
import { Controller, useForm } from 'react-hook-form';
import {
  Box,
  ContextContainer,
  FileUpload,
  ImagePreviewInput,
  TextInput,
  Textarea,
  ColorInput,
  Stack,
  Button,
} from '@bubbles-ui/components';
import { CloudUploadIcon } from '@bubbles-ui/icons/outline';
import { LibraryFormStyles } from './LibraryForm.styles';
import { LIBRARY_FORM_DEFAULT_PROPS, LIBRARY_FORM_PROP_TYPES } from './LibraryForm.constants';

function isImageFile(file) {
  if (file?.type && file?.type.indexOf('image') === 0) {
    return true;
  }

  const name = file?.path || file?.name;

  if (!isEmpty(name)) {
    const ext = toLower(name.split('.').at(-1));
    return ['png', 'jpeg', 'jpg', 'webp', 'gif', 'bmp'].includes(ext);
  }

  return false;
}

const LibraryForm = ({
  labels,
  placeholders,
  helps,
  descriptions,
  errorMessages,
  asset,
  onSubmit,
  children,
  ...props
}) => {
  const defaultValues = {
    file: asset.file || null,
    name: asset.name || '',
    description: asset.description || '',
    color: asset.color || '',
    coverFile: asset.cover || null,
  };

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues });

  const watchCoverFile = watch('coverFile');
  const assetFile = watch('file');

  const [isImage, setIsImage] = useState(false);

  useEffect(() => {
    if (!isEmpty(assetFile)) {
      setIsImage(isImageFile(assetFile));
    }
  }, [assetFile]);

  const handleOnSubmit = (e) => {
    if (e.file.length === 1) e.file = e.file[0];
    if (asset.id) e.id = asset.id;
    isFunction(onSubmit) && onSubmit(e);
  };

  const { classes, cx } = LibraryFormStyles({});
  return (
    <Box className={classes.root}>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <ContextContainer title={labels.title} divided>
          <ContextContainer>
            <Controller
              control={control}
              name="file"
              rules={{ required: errorMessages.file || 'Field required' }}
              render={({ field: { ref, value, ...field } }) => (
                <FileUpload
                  icon={<CloudUploadIcon height={32} width={32} />}
                  title="Click to browse your file"
                  subtitle="or drop here a file from your computer"
                  errorMessage={{ title: 'Error', message: 'File was rejected' }}
                  hideUploadButton
                  single
                  initialFiles={value ? [value] : []}
                  inputWrapperProps={{ error: errors.file }}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="name"
              rules={{ required: errorMessages.name || 'Field required' }}
              render={({ field }) => (
                <TextInput
                  label={labels.name}
                  placeholder={placeholders.name}
                  error={errors.name}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="description"
              render={({ field }) => (
                <Textarea
                  label={labels.description}
                  placeholder={placeholders.description}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="color"
              render={({ field }) => (
                <ColorInput label={labels.color} placeholder={placeholders.color} {...field} />
              )}
            />
          </ContextContainer>
          {!isImage && (
            <ContextContainer subtitle={labels.featuredImage}>
              <Stack direction="row" spacing={3}>
                {!watchCoverFile && <Button variant={'outline'}>Search from library</Button>}
                <Controller
                  control={control}
                  name="coverFile"
                  render={({ field: { ref, value, ...field } }) => (
                    <ImagePreviewInput
                      labels={{
                        changeImage: labels.changeImage,
                        uploadButton: labels.uploadButton,
                      }}
                      previewURL={value}
                      {...field}
                    />
                  )}
                />
              </Stack>
            </ContextContainer>
          )}
          {children}
          <Stack justifyContent={'end'} fullWidth>
            <Button type="submit">{labels.submitForm}</Button>
          </Stack>
        </ContextContainer>
      </form>
    </Box>
  );
};

LibraryForm.defaultProps = LIBRARY_FORM_DEFAULT_PROPS;
LibraryForm.propTypes = LIBRARY_FORM_PROP_TYPES;

export { LibraryForm };
