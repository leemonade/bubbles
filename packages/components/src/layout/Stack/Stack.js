import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { StackStyles } from './Stack.styles';

export const DEFAULT_PROPS = { direction: 'row', fullWidth: false };
export const STACK_DIRECTIONS = ['column', 'row'];

const Stack = ({ direction, fullWidth, children, ...props }) => {
  const { classes, cx } = StackStyles({ direction, fullWidth }, { name: 'Stack' });

  return (
    <Box className={classes.root} {...props}>
      {children}
    </Box>
  );
};

Stack.defaultProps = DEFAULT_PROPS;

Stack.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(STACK_DIRECTIONS),
};

export { Stack };
