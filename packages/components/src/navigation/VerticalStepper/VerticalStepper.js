import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { VerticalStepperStyles } from './VerticalStepper.styles';
import { VERTICAL_STEPPER_DEFAULT_PROPS, VERTICAL_STEPPER_PROP_TYPES } from './VerticalStepper.constants';

const VerticalStepper = ({ ...props }) => {
  const { classes, cx } = VerticalStepperStyles({}, { name: 'VerticalStepper' });

  return <Box className={classes.root}>Vertical stepper</Box>;
};

VerticalStepper.defaultProps = VERTICAL_STEPPER_DEFAULT_PROPS;
VerticalStepper.propTypes = VERTICAL_STEPPER_PROP_TYPES;

export { VerticalStepper };
