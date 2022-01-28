import React, { forwardRef } from 'react';
import { useId } from '@mantine/hooks';
import { isEmpty } from 'lodash';
import { TimeInputStyles } from './TimeInput.styles';
import {
  InputWrapper,
  INPUT_WRAPPER_SHARED_PROPS,
  INPUT_WRAPPER_DEFAULT_PROPS,
} from '../InputWrapper';
import { TimeInput as MantineTimeInput } from '@mantine/dates';

export const TIME_INPUT_DEFAULT_PROPS = {
  ...INPUT_WRAPPER_DEFAULT_PROPS,
};
export const TIME_INPUT_PROP_TYPES = {
  ...INPUT_WRAPPER_SHARED_PROPS,
};

const TimeInput = forwardRef(
  (
    {
      size,
      error,
      label,
      description,
      orientation,
      required,
      help,
      headerStyle,
      contentStyle,
      ...props
    },
    ref
  ) => {
    const { classes, cx } = TimeInputStyles({ size }, { name: 'TimeInput' });

    const uuid = useId();

    return (
      <InputWrapper
        uuid={uuid}
        size={size}
        error={error}
        label={label}
        description={description}
        orientation={orientation}
        required={required}
        help={help}
        headerStyle={headerStyle}
        contentStyle={contentStyle}
      >
        <MantineTimeInput
          {...props}
          id={uuid}
          ref={ref}
          size={size}
          classNames={classes}
          error={!isEmpty(error)}
        />
      </InputWrapper>
    );
  }
);

TimeInput.defaultProps = TIME_INPUT_DEFAULT_PROPS;
TimeInput.propTypes = TIME_INPUT_PROP_TYPES;

export { TimeInput };
