import React, { forwardRef } from 'react';
import { HorizontalStepperContainerStyles } from './HorizontalStepperContainer.styles';
import { Box } from '../Box';
import { HorizontalStepper } from '../../navigation/HorizontalStepper';
import {
  HORIZONTAL_STEPPER_CONTAINER_DEFAULT_PROPS,
  HORIZONTAL_STEPPER_CONTAINER_PROP_TYPES,
} from './HorizontalStepperContainer.constants';
import { ContentWrapper } from './ContentWrapper/ContentWrapper';

const HorizontalStepperContainer = forwardRef(
  ({ data, currentStep, children, disableContentPadding, stickyAt, legible, ...props }, ref) => {
    const { classes, cx } = HorizontalStepperContainerStyles(
      { stickyAt },
      { name: 'VerticalStepperContainer' }
    );

    return (
      <Box ref={ref} className={classes.root}>
        <Box className={classes.stepper}>
          <HorizontalStepper {...props} data={data} currentStep={currentStep} />
        </Box>
        <Box className={classes.content}>
          <ContentWrapper currentStep={data[currentStep]} legible={legible} children={children} />
        </Box>
      </Box>
    );
  }
);

HorizontalStepperContainer.defaultProps = HORIZONTAL_STEPPER_CONTAINER_DEFAULT_PROPS;
HorizontalStepperContainer.propTypes = HORIZONTAL_STEPPER_CONTAINER_PROP_TYPES;

export { HorizontalStepperContainer };
