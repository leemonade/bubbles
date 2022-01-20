import React from 'react';
import { TimeInputStyles } from './TimeInput.styles';
import { useId } from '@mantine/hooks';
import { InputWrapper } from '../InputWrapper';
import { TimeInput as MantineTimeInput } from '@mantine/dates';

export const TIME_INPUT_DEFAULT_PROPS = {};
export const TIME_INPUT_PROP_TYPES = {};

const TimeInput = ({ size, error, label, description, orientation, required, help, ...props }) => {
  const { classes, cx } = TimeInputStyles({});

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
    >
      <MantineTimeInput {...props} />
    </InputWrapper>
  );
};

TimeInput.defaultProps = TIME_INPUT_DEFAULT_PROPS;
TimeInput.propTypes = TIME_INPUT_PROP_TYPES;

export { TimeInput };
