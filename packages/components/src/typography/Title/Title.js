import React from 'react';
import PropTypes from 'prop-types';
import { Title as MantineTitle } from '@mantine/core';
import { TitleStyles } from './Title.styles';

const Title = ({ className, order, ...props }) => {
  const { classes, cx } = TitleStyles({ order });

  return <MantineTitle {...props} order={order} className={cx(classes.root, className)} />;
};

Title.defaultProps = {
  order: 1,
};

Title.propTypes = {
  order: PropTypes.oneOf([1, 2, 3, 4, 6]),
};

export { Title };
