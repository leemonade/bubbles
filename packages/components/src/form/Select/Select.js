import React from 'react';
import PropTypes from 'prop-types';
import { Box, Select as MantineSelect } from '@mantine/core';
import { INPUT_WRAPPER_SIZES, INPUT_WRAPPER_ORIENTATION } from '../InputWrapper';
import { SelectStyles } from './Select.styles';

export const SELECT_SIZES = INPUT_WRAPPER_SIZES;
export const SELECT_ORIENTATION = INPUT_WRAPPER_ORIENTATION;

const Select = ({ ...props }) => {
  const { classes, cx } = SelectStyles({});

  return <MantineSelect {...props} className={classes.root} />;
};

Select.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.any,
  size: PropTypes.oneOf(INPUT_WRAPPER_SIZES),
  orientation: PropTypes.oneOf(INPUT_WRAPPER_ORIENTATION),
  error: PropTypes.string,
};

export { Select };
