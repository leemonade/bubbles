import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Title as MantineTitle } from '@mantine/core';
import { TitleStyles } from './Title.styles';

export const TITLE_COLORS = ['interactive', 'primary', 'secondary', 'tertiary', 'soft'];
export const TITLE_TRANSFORMS = ['capitalize', 'uppercase', 'lowercase', 'none'];

export const TITLE_DEFAULT_PROPS = {
  order: 1,
  color: 'secondary',
  transform: 'none',
};

const Title = forwardRef(({ className, order, color, transform, ...props }, ref) => {
  const { classes, cx } = TitleStyles({ order, color, transform });

  return (
    <MantineTitle {...props} ref={ref} order={order} className={cx(classes.root, className)} />
  );
});

Title.defaultProps = {
  order: 1,
  color: 'primary',
  transform: 'none',
};

Title.propTypes = {
  order: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  transform: PropTypes.oneOf(TITLE_TRANSFORMS),
  color: PropTypes.oneOf(TITLE_COLORS),
};

export { Title };
