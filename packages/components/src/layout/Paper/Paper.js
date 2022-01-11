import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Paper as MantinePaper } from '@mantine/core';
import { PaperStyles } from './Paper.styles';

export const PAPER_RADIUS = ['none', 'xs', 'sm', 'md', 'lg', 'xl'];
export const PAPER_PADDING = ['none', 'xs', 'sm', 'md', 'lg', 'xl'];
export const PAPER_SHADOWS = ['none', 'level100', 'level01', 'level02', 'level03'];
export const PAPER_DEFAULT_PROPS = {
  radius: 'md',
  padding: 'md',
  shadow: 'level03',
};
export const PAPER_PROP_TYPES = {
  radius: PropTypes.oneOf(PAPER_RADIUS),
  padding: PropTypes.oneOf(PAPER_PADDING),
  children: PropTypes.node,
  className: PropTypes.string,
};

const Paper = forwardRef(
  ({ padding, radius, shadow, component, children, className, ...props }, ref) => {
    const { classes, cx } = PaperStyles({ padding, radius, shadow }, { name: 'Paper' });

    return (
      <MantinePaper
        component={component}
        padding={padding}
        radius={radius}
        {...props}
        ref={ref}
        classNames={cx(classes, className)}
        className={classes.root}
      >
        {children}
      </MantinePaper>
    );
  }
);

Paper.defaultProps = PAPER_DEFAULT_PROPS;

Paper.propTypes = PAPER_PROP_TYPES;

export { Paper };
