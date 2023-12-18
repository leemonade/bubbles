import React, { forwardRef } from 'react';
import { Box, LoadingOverlay as MantineLoadingOverlay } from '@mantine/core';
import { LoadingOverlayStyles } from './LoadingOverlay.styles';

export const LOADING_OVERLAY_DEFAULT_PROPS = {};
export const LOADING_OVERLAY_PROP_TYPES = {};

const LoadingOverlay = forwardRef(({ ...props }, ref) => {
  const { classes, cx } = LoadingOverlayStyles({}, { name: 'LoadingOverlay' });
  return (
    <Box className={classes.root}>
      <MantineLoadingOverlay {...props} ref={ref} />
    </Box>
  );
});

LoadingOverlay.displayName = 'LoadingOverlay';
LoadingOverlay.defaultProps = LOADING_OVERLAY_DEFAULT_PROPS;
LoadingOverlay.propTypes = LOADING_OVERLAY_PROP_TYPES;

export { LoadingOverlay };
