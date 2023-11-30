import React, { forwardRef } from 'react';
import { LoadingOverlay as MantineLoadingOverlay } from '@mantine/core';

export const LOADING_OVERLAY_DEFAULT_PROPS = {};
export const LOADING_OVERLAY_PROP_TYPES = {};

const LoadingOverlay = forwardRef(({ ...props }, ref) => (
  <MantineLoadingOverlay {...props} ref={ref} />
));

LoadingOverlay.displayName = 'LoadingOverlay';
LoadingOverlay.defaultProps = LOADING_OVERLAY_DEFAULT_PROPS;
LoadingOverlay.propTypes = LOADING_OVERLAY_PROP_TYPES;

export { LoadingOverlay };
