import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { __name__Styles } from './__name__.styles';
import { __name__(constantCase)_DEFAULT_PROPS, __name__(constantCase)_PROP_TYPES } from './__name__.constants';

const __name__ = ({ ...props }) => {
  const { classes, cx } = __name__Styles({}, { name: '__name__' });

  return <Box className={classes.root}>__name__(sentenceCase)</Box>;
};

__name__.defaultProps = __name__(constantCase)_DEFAULT_PROPS;
__name__.propTypes = __name__(constantCase)_PROP_TYPES;

export { __name__ };
