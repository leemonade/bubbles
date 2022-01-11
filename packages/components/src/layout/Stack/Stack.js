import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { StackStyles } from './Stack.styles';

export const STACK_DEFAULT_PROPS = {
  direction: 'row',
  wrap: 'nowrap',
  alignContent: 'normal',
  justifyContent: 'normal',
  alignItems: 'normal',
  fullWidth: false,
  fullHeight: false,
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
  'start',
  'end',
];
export const STACK_JUSTIFY_CONTENT = STACK_ALIGN_CONTENT;
export const STACK_ALIGN_ITEMS = [
  'normal',
  'center',
  'flex-start',
  'flex-end',
  'stretch',
  'start',
  'end',
  'baseline',
];

const Stack = ({
  className,
  direction,
  wrap,
  alignContent,
  justifyContent,
  alignItems,
  fullWidth,
  fullHeight,
  spacing,
  children,
  ...props
}) => {
  const { classes, cx } = StackStyles(
    { direction, wrap, alignContent, justifyContent, alignItems, fullWidth, fullHeight, spacing },
    { name: 'Stack' }
  );

  const childrenWithProps = useMemo(
    () =>
      React.Children.map(children, (child) => {
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
      }),
    [children]
  );

  return (
    <Box {...props} className={cx(classes.root, className)}>
      {childrenWithProps}
    </Box>
  );
};

Stack.defaultProps = STACK_DEFAULT_PROPS;

Stack.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(STACK_DIRECTIONS),
  wrap: PropTypes.oneOf(STACK_WRAP),
  alignContent: PropTypes.oneOf(STACK_ALIGN_CONTENT),
  justifyContent: PropTypes.oneOf(STACK_JUSTIFY_CONTENT),
  alignItems: PropTypes.oneOf(STACK_ALIGN_ITEMS),
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
  spacing: PropTypes.number,
};

export { Stack };
