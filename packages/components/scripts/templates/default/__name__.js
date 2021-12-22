import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { __name__Styles } from './__name__.styles';

export const DEFAULT_PROPS = {};

const __name__ = ({ ...props }) => {
  const { classes, cx } = __name__Styles({});

  return <Box className={classes.root}>__name__(sentenceCase)</Box>;
};

__name__.defaultProps = DEFAULT_PROPS;

__name__.propTypes = {
  //
};

export { __name__ };
