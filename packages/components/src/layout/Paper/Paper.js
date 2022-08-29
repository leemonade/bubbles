import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Paper as MantinePaper } from '@mantine/core';
import { PaperStyles } from './Paper.styles';

export const PAPER_RADIUS = ['none', 'xs', 'sm', 'md', 'lg', 'xl'];
export const PAPER_SHADOWS = ['none', 'level100', 'level01', 'level02', 'level03'];
export const PAPER_COLORS = ['default', 'solid', 'none'];
export const PAPER_DEFAULT_PROPS = {
  radius: 'md',
  padding: 5,
  shadow: 'level03',
  color: PAPER_COLORS[0],
  bordered: false,
  fullWidth: false,
  fullHeight: false,
};
export const PAPER_PROP_TYPES = {
  radius: PropTypes.oneOf(PAPER_RADIUS),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  shadow: PropTypes.oneOf(PAPER_SHADOWS),
  bordered: PropTypes.bool,
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
};

const Paper = forwardRef(
  (
    {
      padding,
      radius,
      shadow,
      component,
      children,
      className,
      color,
      fullWidth,
      fullHeight,
      bordered,
      ...props
    },
    ref
  ) => {
    const { classes, cx } = PaperStyles(
      { padding, radius, shadow, color, fullWidth, fullHeight, bordered },
      { name: 'Paper' }
    );

    return (
      <MantinePaper
        {...props}
        ref={ref}
        padding="none"
        component={component}
        radius={radius}
        className={cx(classes.root, className)}
      >
        {children}
      </MantinePaper>
    );
  }
);

Paper.defaultProps = PAPER_DEFAULT_PROPS;

Paper.propTypes = PAPER_PROP_TYPES;

export { Paper };
