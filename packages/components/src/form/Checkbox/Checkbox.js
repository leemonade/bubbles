import React, { forwardRef } from 'react';
import {
  BOOLEAN_INPUT_DEFAULT_PROPS,
  BOOLEAN_INPUT_PROP_TYPES,
  BooleanInput,
} from '../BooleanInput';

export const CHECKBOX_PROP_TYPES = BOOLEAN_INPUT_PROP_TYPES;
export const CHECKBOX_DEFAULT_PROPS = BOOLEAN_INPUT_DEFAULT_PROPS;

const Checkbox = forwardRef(({ display, useAria, ...props }, ref) => (
  <BooleanInput {...props} display="checkbox" useAria={useAria} ref={ref} />
));

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = CHECKBOX_PROP_TYPES;
Checkbox.defaultProps = CHECKBOX_DEFAULT_PROPS;

export { Checkbox };
