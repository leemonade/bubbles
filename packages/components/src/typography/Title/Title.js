import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Title as MantineTitle } from '@mantine/core';
import { TitleStyles } from './Title.styles';

export const TITLE_COLORS = [
  'interactive',
  'primary',
  'secondary',
  'tertiary',
  'quartiary',
  'soft',
];
export const TITLE_TRANSFORMS = ['capitalize', 'uppercase', 'lowercase', 'none'];

export const TITLE_DEFAULT_PROPS = {
  order: 1,
  color: 'primary',
  transform: 'none',
  highlighted: false,
};

const Title = forwardRef(({ className, order, color, transform, highlighted, ...props }, ref) => {
  const { classes, cx } = TitleStyles({ order, color, transform, highlighted });

  return (
    <MantineTitle {...props} ref={ref} order={order} className={cx(classes.root, className)} />
  );
});

Title.defaultProps = TITLE_DEFAULT_PROPS;

Title.propTypes = {
  order: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  transform: PropTypes.oneOf(TITLE_TRANSFORMS),
  color: PropTypes.oneOf(TITLE_COLORS),
  highlighted: PropTypes.bool,
};

export { Title };
