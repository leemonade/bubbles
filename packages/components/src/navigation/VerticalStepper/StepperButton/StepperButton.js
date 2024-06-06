import React from 'react';
import isFunction from 'lodash/isFunction';
import { Box } from '../../../layout/Box';
import { Button } from '../../../form/Button';
import { Text } from '../../../typography/Text';
import { StepperButtonStyles } from './StepperButton.styles';
import { STEPPER_BUTTON_DEFAULT_PROPS, STEPPER_BUTTON_PROP_TYPES } from './StepperButton.constants';
import { Progress } from '../Progress';

const StepperButton = ({ label, active, state, position, onClick }) => {
  const isCompleted = state === 'completed' || state === 'OK' || state === 'KO';

  const onClickHandler = () => {
    if (isFunction(onClick)) onClick();
  };

  const { classes } = StepperButtonStyles({ isCompleted }, { name: 'Button' });
  return (
    <Box className={classes.root}>
      <Box className={classes.isCompletedBackground} />
      <Box className={classes.buttonContainer}>
        {isCompleted ? (
          <Text className={classes.label}>{label}</Text>
        ) : (
          <Button size="xs" disabled={!active} fullWidth onClick={onClickHandler}>
            {label}
          </Button>
        )}
      </Box>
      <Progress state={state} position={position} isButton />
    </Box>
  );
};

StepperButton.defaultProps = STEPPER_BUTTON_DEFAULT_PROPS;
StepperButton.propTypes = STEPPER_BUTTON_PROP_TYPES;

export { StepperButton };
