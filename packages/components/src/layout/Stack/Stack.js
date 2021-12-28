import React from 'react';
import PropTypes from 'prop-types';
import { StackStyles } from './Stack.styles';

export const DEFAULT_PROPS = {
  direction: 'row',
  wrap: 'nowrap',
  alignContent: 'normal',
  justifyContent: 'normal',
  alignItems: 'normal',
  fullWidth: false,
};
export const STACK_DIRECTIONS = ['column', 'row'];
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
  ...props
}) => {
  const { classes, cx } = StackStyles(
    { direction, wrap, alignContent, justifyContent, alignItems, fullWidth },
    { name: 'Stack' }
  );

  return (
    <div className={cx(classes.root, className)} {...props}>
      {children}
    </div>
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
};

export { Stack };
