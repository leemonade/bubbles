import React, { forwardRef } from 'react';
import {
  BOOLEAN_INPUT_DEFAULT_PROPS,
  BOOLEAN_INPUT_PROP_TYPES,
  BooleanInput,
} from '../BooleanInput';

export const CHECKBOX_PROP_TYPES = BOOLEAN_INPUT_PROP_TYPES;
export const CHECKBOX_DEFAULT_PROPS = BOOLEAN_INPUT_DEFAULT_PROPS;

const Checkbox = forwardRef(({ display, ...props }, ref) => {
  return <BooleanInput {...props} display="checkbox" ref={ref} />;
});

Checkbox.propTypes = CHECKBOX_PROP_TYPES;
Checkbox.defaultProps = CHECKBOX_DEFAULT_PROPS;

export { Checkbox };
