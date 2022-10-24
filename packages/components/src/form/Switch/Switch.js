import React, { forwardRef } from 'react';
import {
  BOOLEAN_INPUT_DEFAULT_PROPS,
  BOOLEAN_INPUT_PROP_TYPES,
  BooleanInput,
} from '../BooleanInput';

export const SWITCH_DEFAULT_PROPS = BOOLEAN_INPUT_DEFAULT_PROPS;
export const SWITCH_PROP_TYPES = BOOLEAN_INPUT_PROP_TYPES;

const Switch = forwardRef(({ display, useAria, isPro, ...props }, ref) => {
  return <BooleanInput {...props} display="switch" useAria={useAria} ref={ref} isPro={isPro} />;
});

Switch.defaultProps = SWITCH_DEFAULT_PROPS;
Switch.propTypes = SWITCH_PROP_TYPES;

export { Switch };
