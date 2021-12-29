import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { StackStyles } from './Stack.styles';

export const DEFAULT_PROPS = {
  direction: 'row',
  wrap: 'nowrap',
  alignContent: 'normal',
  justifyContent: 'normal',
  alignItems: 'normal',
  fullWidth: false,
  spacing: 0,
};
export const STACK_DIRECTIONS = ['column', 'row', 'row-reverse', 'column-reverse'];
export const STACK_WRAP = ['nowrap', 'wrap', 'wrap-reverse'];
export const STACK_ALIGN_CONTENT = [
  'normal',
  'center',
  'flex-start',
  'flex-end',
  'space-between',
  'space-around',
];
export const STACK_JUSTIFY_CONTENT = [
  'normal',
  'center',
  'flex-start',
  'flex-end',
  'space-between',
  'space-around',
];
export const STACK_ALIGN_ITEMS = ['normal', 'center', 'flex-start', 'flex-end', 'stretch'];

const Stack = ({
  className,
  direction,
  wrap,
  alignContent,
  justifyContent,
  alignItems,
  fullWidth,
  children,
  spacing,
  ...props
}) => {
  const { classes, cx } = StackStyles(
    { direction, wrap, alignContent, justifyContent, alignItems, fullWidth, spacing },
    { name: 'Stack' }
  );

  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (
      React.isValidElement(child) &&
      fullWidth &&
      justifyContent === 'normal' &&
      alignContent === 'normal' &&
      alignItems === 'normal'
    ) {
      const style = { ...child.props.style, flex: 1 };
      return React.cloneElement(child, { style });
    }
    return child;
  });

  return (
    <Box className={cx(classes.root, className)} {...props}>
      {childrenWithProps}
    </Box>
  );
};

Stack.defaultProps = DEFAULT_PROPS;

Stack.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(STACK_DIRECTIONS),
  wrap: PropTypes.oneOf(STACK_WRAP),
  alignContent: PropTypes.oneOf(STACK_ALIGN_CONTENT),
  justifyContent: PropTypes.oneOf(STACK_JUSTIFY_CONTENT),
  alignItems: PropTypes.oneOf(STACK_ALIGN_ITEMS),
  fullWidth: PropTypes.bool,
  spacing: PropTypes.number,
};

export { Stack };
