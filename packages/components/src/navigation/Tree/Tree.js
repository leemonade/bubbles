import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { TreeStyles } from './Tree.styles';

const Tree = ({ ...props }) => {
  const { classes, cx } = TreeStyles({});

  return <Box className={classes.root}>Tree</Box>;
};

Tree.propTypes = {
  //
};

export { Tree };
