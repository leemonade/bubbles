import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Divider as MantineDivider } from '@mantine/core';
import { DividerStyles } from './Divider.styles';

export const DIVIDER_ORIENTATIONS = ['horizontal', 'vertical'];

export const DIVIDER_DEFAULT_PROPS = {
  orientation: DIVIDER_ORIENTATIONS[0],
};
export const DIVIDER_PROP_TYPES = {
  orientation: PropTypes.oneOf(DIVIDER_ORIENTATIONS),
};

const Divider = ({ orientation, ...props }) => {
  const { classes } = DividerStyles({ orientation });

  return (
    <MantineDivider
      {...props}
      orientation={orientation}
      className={classes.root}
      classNames={classes}
    />
  );
};

Divider.defaultProps = DIVIDER_DEFAULT_PROPS;
Divider.propTypes = DIVIDER_PROP_TYPES;

export { Divider };
