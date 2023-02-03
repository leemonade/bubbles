import React, { forwardRef } from 'react';
import { HorizontalStepperContainerStyles } from './HorizontalStepperContainer.styles';
import { Box } from '../Box';
import {
  HORIZONTAL_STEPPER_CONTAINER_DEFAULT_PROPS,
  HORIZONTAL_STEPPER_CONTAINER_PROP_TYPES,
} from './HorizontalStepperContainer.constants';
import { ContentWrapper } from './ContentWrapper/ContentWrapper';
import { HeaderWrapper } from './HeaderWrapper/HeaderWrapper';

const HorizontalStepperContainer = forwardRef(
  ({ data, currentStep, children, Header, contentPadding, stickyAt, fullHeight, ...props }, ref) => {
    const { classes } = HorizontalStepperContainerStyles(
      { fullHeight },
      { name: 'HorizontalStepperContainer' }
    );

    return (
      <Box ref={ref} className={classes.root}>
        <HeaderWrapper Header={Header} currentStep={currentStep} data={data} stickyAt={stickyAt} {...props} />
        <ContentWrapper currentStep={data[currentStep]} children={children} contentPadding={contentPadding} />
      </Box>
    );
  }
);

HorizontalStepperContainer.defaultProps = HORIZONTAL_STEPPER_CONTAINER_DEFAULT_PROPS;
HorizontalStepperContainer.propTypes = HORIZONTAL_STEPPER_CONTAINER_PROP_TYPES;

export { HorizontalStepperContainer };
