import React from 'react';
import PropTypes from 'prop-types';
import { Box, Select as MantineSelect } from '@mantine/core';
import { INPUT_WRAPPER_SIZES, INPUT_WRAPPER_ORIENTATION } from '../InputWrapper';
import { InputError } from '../InputError';
import { InputDescription } from '../InputDescription';
import { SelectStyles } from './Select.styles';

export const SELECT_SIZES = INPUT_WRAPPER_SIZES;
export const SELECT_ORIENTATION = INPUT_WRAPPER_ORIENTATION;

const Select = forwardRef(
  ({ description, size: sizeProp, orientation: orientationProp, error, ...props }, ref) => {
    const size = INPUT_WRAPPER_SIZES.includes(sizeProp) ? sizeProp : 'sm';
    const orientation = INPUT_WRAPPER_ORIENTATION.includes(orientationProp)
      ? orientationProp
      : 'vertical';
    const customError = error ? <InputError message={error} /> : undefined;

    const { classes, cx } = SelectStyles({});

    return (
      <MantineSelect
        {...props}
        ref={ref}
        error={customError}
        description={<InputDescription message={description} />}
        className={classes.root}
      />
    );
  }
);

Select.defaultProps = {
  size: 'sm',
  orientation: 'vertical',
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
