import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { LoadingOverlay as MantineLoadingOverlay } from '@mantine/core';
import { LoadingOverlayStyles } from './LoadingOverlay.styles';

export const LOADING_OVERLAY_DEFAULT_PROPS = {};
export const LOADING_OVERLAY_PROP_TYPES = {};

const LoadingOverlay = forwardRef(({ ...props }, ref) => {
  const { classes, cx } = LoadingOverlayStyles({});

  return <MantineLoadingOverlay {...props} ref={ref} classNames={classes} />;
});

LoadingOverlay.defaultProps = LOADING_OVERLAY_DEFAULT_PROPS;
LoadingOverlay.propTypes = LOADING_OVERLAY_PROP_TYPES;

export { LoadingOverlay };
