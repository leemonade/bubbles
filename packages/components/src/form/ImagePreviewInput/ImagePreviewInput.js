import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isFunction, isString, isNil } from 'lodash';
import { CloudUploadIcon, UndoIcon } from '@bubbles-ui/icons/outline/';
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
  }),
  value: PropTypes.instanceOf(File),
  previewURL: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(File)]),
  previewStyle: PropTypes.object,
  control: PropTypes.element,
  onChange: PropTypes.func,
  readonly: PropTypes.bool,
  disabled: PropTypes.bool,
  useAria: PropTypes.bool,
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

  const getControl = () => {
    if (!control)
      return (
        <Button variant="outline" leftIcon={<CloudUploadIcon />} onClick={openFileBrowser}>
          {labels.uploadButton}
        </Button>
      );

    return React.cloneElement(control, { onClick: openFileBrowser });
  };

  useEffect(() => {
    if (imageValue) {
      const imageSrc = URL.createObjectURL(imageValue);
      setImagePreview(imageSrc);
    }
  }, [imageValue]);

  const { classes, cx } = ImagePreviewInputStyles({});
  return (
    <Box className={classes.root}>
      {!imagePreview ? (
        getControl()
      ) : (
        <Stack spacing={2} fullWidth>
          <ImageLoader
            src={imagePreview}
            height={132}
            width={224}
            skipFlex
            radius={8}
            style={{ ...previewStyle }}
            useAria={useAria}
          />
          {!readonly && !disabled ? (
            <Box skipFlex>
              <Button
                variant="light"
                size="sm"
                compact
                leftIcon={<UndoIcon />}
                onClick={resetImage}
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
