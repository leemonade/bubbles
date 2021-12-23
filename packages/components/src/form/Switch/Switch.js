import React from 'react';
import PropTypes from 'prop-types';
import { Switch as MantineSwitch } from '@mantine/core';
import { SwitchStyles } from './Switch.styles';

export const SWITCH_SIZES = ['sm', 'md'];
export const SWITCH_LABEL_POSITIONS = ['start', 'end'];

const DEFAULTS = {
  SIZE: 'md',
  LABEL_POSITION: 'end',
};

const Switch = ({ label, labelPosition: labelPositionProp, size: sizeProp, ...props }) => {
  const size = SWITCH_SIZES.includes(sizeProp) ? sizeProp : DEFAULTS.SIZE;
  const labelPosition = SWITCH_LABEL_POSITIONS.includes(labelPositionProp)
    ? labelPositionProp
    : DEFAULTS.LABEL_POSITION;

  const { classes, cx } = SwitchStyles({ size, labelPosition });

  return <MantineSwitch {...props} label={label} size={size} classNames={classes} />;
};

Switch.defaultProps = {
  size: DEFAULTS.SIZE,
  labelPosition: DEFAULTS.LABEL_POSITION,
};

Switch.propTypes = {
  size: PropTypes.oneOf(SWITCH_SIZES),
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(SWITCH_LABEL_POSITIONS),
};

export { Switch };
