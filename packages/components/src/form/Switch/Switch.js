import React, { forwardRef } from 'react';
import {
  BooleanInput,
  BOOLEAN_INPUT_DEFAULT_PROPS,
  BOOLEAN_INPUT_PROP_TYPES,
} from '../BooleanInput';

export const SWITCH_DEFAULT_PROPS = BOOLEAN_INPUT_DEFAULT_PROPS;
export const SWITCH_PROP_TYPES = BOOLEAN_INPUT_PROP_TYPES;

const Switch = forwardRef(({ display, ...props }, ref) => {
  return <BooleanInput {...props} display="switch" ref={ref} />;
});

Switch.defaultProps = SWITCH_DEFAULT_PROPS;
Switch.propTypes = SWITCH_PROP_TYPES;

export { Switch };
