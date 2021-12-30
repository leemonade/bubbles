import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Divider as MantineDivider } from '@mantine/core';
import { DividerStyles } from './Divider.styles';

export const DIVIDER_DEFAULT_PROPS = {};
export const DIVIDER_PROP_TYPES = {};

const Divider = ({ ...props }) => {
  const { classes, cx } = DividerStyles({});

  return <MantineDivider {...props} className={classes.root} classNames={classes} />;
};

Divider.defaultProps = DIVIDER_DEFAULT_PROPS;

Divider.propTypes = DIVIDER_PROP_TYPES;

export { Divider };
