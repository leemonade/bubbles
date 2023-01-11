import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box as MantineBox } from '@mantine/core';
import { BoxStyles } from './Box.styles';

export const BOX_DEFAULT_PROPS = {};
export const BOX_PROP_TYPES = {
  padding: PropTypes.number,
};

const Box = forwardRef(({ className, noFlex, skipFlex, padding, ...props }, ref) => {
  const { classes, cx } = BoxStyles({ padding }, { name: 'Box' });

  return <MantineBox {...props} ref={ref} className={cx(classes.root, className)} />;
});

Box.defaultProps = BOX_DEFAULT_PROPS;
Box.propTypes = BOX_PROP_TYPES;

export { Box };
