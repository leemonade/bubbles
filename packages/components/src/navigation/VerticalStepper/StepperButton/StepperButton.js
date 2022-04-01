import React from 'react';
import { Box } from '../../../layout';
import { Button } from '../../../form';
import { Text } from '../../../typography';
import { StepperButtonStyles } from './StepperButton.styles';
import { STEPPER_BUTTON_DEFAULT_PROPS, STEPPER_BUTTON_PROP_TYPES } from './StepperButton.constants';
import isFunction from 'lodash/isFunction';
import { Progress } from '../Progress';

const StepperButton = ({ label, active, state, position, onClick, ...props }) => {
  const isCompleted = state === 'completed' || state === 'OK' || state === 'KO';

  const onClickHandler = () => {
    isFunction(onClick) && onClick();
  };

  const { classes, cx } = StepperButtonStyles({ isCompleted }, { name: 'Button' });
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
