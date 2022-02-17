import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Title as MantineTitle } from '@mantine/core';
import { TitleStyles } from './Title.styles';

const Title = forwardRef(({ className, order, ...props }, ref) => {
  const { classes, cx } = TitleStyles({ order });

  return (
    <MantineTitle {...props} ref={ref} order={order} className={cx(classes.root, className)} />
  );
});

Title.defaultProps = {
  order: 1,
};

Title.propTypes = {
  order: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

export { Title };
