import React from 'react';
import { Box } from '../../../layout';
import { Button } from '../../../form';
import { StepperButtonStyles } from './StepperButton.styles';
import { STEPPER_BUTTON_DEFAULT_PROPS, STEPPER_BUTTON_PROP_TYPES } from './StepperButton.constants';
import isFunction from 'lodash/isFunction';
import { Progress } from '../Progress';

const StepperButton = ({ label, active, state, position, onClick, ...props }) => {
  const { classes, cx } = StepperButtonStyles({}, { name: 'Button' });

  const onClickHandler = () => {
    isFunction(onClick) && onClick();
  };

  return (
    <Box className={classes.root}>
      <Button size="xs" disabled={!active} fullWidth onClick={onClickHandler}>
        {label}
      </Button>
      <Progress state={state} position={position} isButton />
    </Box>
  );
};

StepperButton.defaultProps = STEPPER_BUTTON_DEFAULT_PROPS;
StepperButton.propTypes = STEPPER_BUTTON_PROP_TYPES;

export { StepperButton };
