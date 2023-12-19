import React, { forwardRef } from 'react';
import { VerticalStepperContainerStyles } from './VerticalStepperContainer.styles';
import { Box } from '../Box';
import { Stack } from '../Stack';
import { VerticalStepper } from '../../navigation/VerticalStepper/VerticalStepper';
import {
  VERTICAL_STEPPER_CONTAINER_DEFAULT_PROPS,
  VERTICAL_STEPPER_CONTAINER_PROP_TYPES,
} from './VerticalStepperContainer.constants';

const VerticalStepperContainer = forwardRef(({ children, scrollRef, ...props }, ref) => {
  const { classes } = VerticalStepperContainerStyles({ name: 'VerticalStepperContainer' });

  return (
    <Box ref={ref} className={classes.root}>
      <Stack
        ref={scrollRef}
        justifyContent="center"
        fullWidth
        fullHeight
        style={{
          backgroundColor: '#f8f9fb',
          overflow: 'auto',
          position: 'relative',
        }}
      >
        <Box className={classes.stepper}>
          <VerticalStepper {...props} />
        </Box>
        <Box className={classes.content}>{children}</Box>
      </Stack>
    </Box>
  );
});

VerticalStepperContainer.displayName = 'VerticalStepperContainer';
VerticalStepperContainer.defaultProps = VERTICAL_STEPPER_CONTAINER_DEFAULT_PROPS;
VerticalStepperContainer.propTypes = VERTICAL_STEPPER_CONTAINER_PROP_TYPES;

export { VerticalStepperContainer };
