import React from 'react';
import PropTypes from 'prop-types';
import { StackStyles } from './Stack.styles';

export const DEFAULT_PROPS = { direction: 'row', fullWidth: false };
export const STACK_DIRECTIONS = ['column', 'row'];

const Stack = ({ className, direction, fullWidth, children, ...props }) => {
  const { classes, cx } = StackStyles({ direction, fullWidth }, { name: 'Stack' });

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
};

export { Stack };
