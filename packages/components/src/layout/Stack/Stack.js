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
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
  spacing: PropTypes.number,
};

export { Stack };
