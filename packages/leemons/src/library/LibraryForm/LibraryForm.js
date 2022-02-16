import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@bubbles-ui/components';
import { LibraryFormStyles } from './LibraryForm.styles';

export const LIBRARY_FORM_DEFAULT_PROPS = {};
export const LIBRARY_FORM_PROP_TYPES = {};

const LibraryForm = ({ ...props }) => {
  const { classes, cx } = LibraryFormStyles({});

  return <Box className={classes.root}>Library form</Box>;
};

LibraryForm.defaultProps = LIBRARY_FORM_DEFAULT_PROPS;
LibraryForm.propTypes = LIBRARY_FORM_PROP_TYPES;

export { LibraryForm };
