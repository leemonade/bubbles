import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isFunction, isString, isNil } from 'lodash';
import { CloudUploadIcon, SynchronizeArrowsIcon } from '@bubbles-ui/icons/outline/';
import { DeleteBinIcon } from '@bubbles-ui/icons/solid/';
import { Box } from '../../layout/Box';
import { Stack } from '../../layout/Stack';
import { Button } from '../Button';
import { ImageLoader } from '../../misc/ImageLoader';
import { ImagePreviewInputStyles } from './ImagePreviewInput.styles';

export const IMAGE_PREVIEW_INPUT_DEFAULT_PROPS = {
  labels: {
    changeImage: '',
    uploadButton: '',
  },
  previewURL: '',
};
export const IMAGE_PREVIEW_INPUT_PROP_TYPES = {
  labels: PropTypes.shape({
    uploadButton: PropTypes.string,
    changeImage: PropTypes.string,
    removeButton: PropTypes.string,
  }),
  value: PropTypes.any,
  previewURL: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  previewStyle: PropTypes.object,
  control: PropTypes.element,
  onChange: PropTypes.func,
  readonly: PropTypes.bool,
  disabled: PropTypes.bool,
  useAria: PropTypes.bool,
  noPicker: PropTypes.bool,
};

const ImagePreviewInput = ({
  labels,
  value,
  previewURL,
  previewStyle,
  control,
  onChange,
  readonly,
  disabled,
  useAria,
  noPicker,
  onShowDrawer,
}) => {
  const [imagePreview, setImagePreview] = useState(previewURL);
  const [imageValue, setImageValue] = useState(value);

  useEffect(() => {
    if (isString(previewURL) && imagePreview !== previewURL) {
      setImagePreview(previewURL);
    } else if (isNil(previewURL)) {
      setImagePreview(null);
    }
  }, [previewURL]);

  useEffect(() => {
    if (isNil(value)) {
      setImagePreview(null);
      setImageValue(null);
    }
  }, [value]);

  const resetImage = () => {
    if (isFunction(onChange)) onChange(null);
    setImagePreview(null);
    setImageValue(null);
  };

  const openFileBrowser = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      file.path = file.name;
      setImageValue(file);
      if (isFunction(onChange)) onChange(file);
    };
    input.click();
  };

  const handleShowDrawer = () => {
    if (isFunction(onShowDrawer)) onShowDrawer(true);
  };

  const getControl = () => {
    if (!control && !noPicker)
      return (
        <Button variant="link" leftIcon={<CloudUploadIcon />} onClick={openFileBrowser}>
          {labels.uploadButton}
        </Button>
      );

    return !noPicker ? React.cloneElement(control, { onClick: openFileBrowser }) : null;
  };

  useEffect(() => {
    if (imageValue) {
      const imageSrc = URL.createObjectURL(imageValue);
      setImagePreview(imageSrc);
    }
  }, [imageValue]);

  const { classes } = ImagePreviewInputStyles({});
  return (
    <Box className={classes.root}>
      {!imagePreview ? (
        getControl()
      ) : (
        <Stack spacing={2} fullWidth alignItems="flex-end">
          <ImageLoader
            src={imagePreview}
            height={132}
            width={224}
            noFlex
            radius={4}
            style={{ ...previewStyle }}
            useAria={useAria}
            bordered
            forceImage
          />
          {!readonly && !disabled ? (
            <Box noFlex>
              <Button
                variant="link"
                size="sm"
                compact
                leftIcon={<DeleteBinIcon />}
                onClick={resetImage}
                useAria={useAria}
              >
                {labels.removeButton}
              </Button>
              <Button
                variant="link"
                size="sm"
                compact
                leftIcon={<SynchronizeArrowsIcon />}
                onClick={handleShowDrawer}
                useAria={useAria}
              >
                {labels.changeImage}
              </Button>
            </Box>
          ) : null}
        </Stack>
      )}
    </Box>
  );
};

ImagePreviewInput.defaultProps = IMAGE_PREVIEW_INPUT_DEFAULT_PROPS;
ImagePreviewInput.propTypes = IMAGE_PREVIEW_INPUT_PROP_TYPES;

export { ImagePreviewInput };
