import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Cropper from 'react-easy-crop';
import { noop } from 'lodash';
import { Stack, Avatar, Box, Button, Modal, Slider, Skeleton } from '@bubbles-ui/components';
import { DeleteBinIcon, RefreshIcon } from '@bubbles-ui/icons/solid';
import { CloudUploadIcon } from '@bubbles-ui/icons/outline';
import { getCroppedCanvas } from './helpers/canvasUtils';
import { ImageProfilePickerStyles } from './ImageProfilePiker.styles';

const CROP_SIZE = 160;

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

export default function ImageProfilePicker({
  fullName,
  url,
  onChange = noop,
  loading = false,
  labels = {},
}) {
  const [imageSrc, setImageSrc] = React.useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(url);
  const fileInputRef = useRef(null);

  const { classes } = ImageProfilePickerStyles();

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
      setIsModalOpen(true);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Disparar el clic del input de tipo file
  };

  const onModalClose = () => {
    setIsModalOpen(false);
    setZoom(1);
    setRotation(0);
    setImageSrc(null);
    fileInputRef.current.value = '';
  };

  const onDelete = () => {
    setAvatarUrl(null);
    onChange(null);
  };

  const showCroppedImage = async () => {
    try {
      const croppedCanvas = await getCroppedCanvas(imageSrc, croppedAreaPixels, rotation);
      croppedCanvas.toBlob((file) => {
        file.name = 'avatar.jpeg';
        onChange(file);
        setAvatarUrl(URL.createObjectURL(file));
        onModalClose();
      }, 'image/jpeg');
    } catch (e) {
      console.error(e);
    }
  };

  const onCropComplete = (croppedArea, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  };

  if (loading) {
    return (
      <Stack spacing={5} alignItems="center">
        <Skeleton height={56} width={56} radius={30} />
        <Skeleton height={26} width={120} radius={30} />
      </Stack>
    );
  }

  return (
    <>
      <Stack
        alignItems="center"
        justifyContent="center"
        direction="column"
        className={classes.root}
        spacing={2}
      >
        <Box>
          <Avatar fullName={fullName} size="xlg" image={avatarUrl} />
        </Box>
        {!avatarUrl ? (
          <Button variant="link" onClick={handleButtonClick} leftIcon={<CloudUploadIcon />}>
            {labels.uploadImage}
          </Button>
        ) : (
          <Box>
            <Button variant="link" leftIcon={<DeleteBinIcon />} onClick={onDelete}>
              {labels.delete}
            </Button>
            <Button variant="link" leftIcon={<RefreshIcon />} onClick={handleButtonClick}>
              {labels.changeImage}
            </Button>
          </Box>
        )}
      </Stack>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={onFileChange}
        accept="image/*"
      />
      <Modal
        opened={isModalOpen}
        withCloseButton={false}
        size={210}
        closeOnClickOutside={false}
        onClose={onModalClose}
      >
        <Stack direction="column" spacing={4} fullWidth sx={{ height: 260 }}>
          <Box style={{ position: 'relative' }}>
            <Box
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <Cropper
                image={imageSrc}
                crop={crop}
                rotation={rotation}
                zoom={zoom}
                aspect={1}
                cropShape="round"
                cropSize={{ width: CROP_SIZE, height: CROP_SIZE }}
                showGrid={false}
                onCropChange={setCrop}
                onRotationChange={setRotation}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </Box>
          </Box>
          <Stack noFlex fullWidth>
            <Slider min={0.8} max={3} step={0.05} value={zoom} onChange={setZoom} />
          </Stack>
          <Stack noFlex justifyContent="space-between" fullWidth>
            <Button variant="link" onClick={onModalClose}>
              {labels.cancel}
            </Button>
            <Button variant="primary" onClick={showCroppedImage}>
              {labels.accept}
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
}

ImageProfilePicker.propTypes = {
  fullName: PropTypes.string.isRequired,
  labels: PropTypes.any,
  url: PropTypes.string,
  onChange: PropTypes.func,
  loading: PropTypes.bool,
};
