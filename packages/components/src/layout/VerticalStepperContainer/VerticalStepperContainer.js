import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { VerticalStepperContainerStyles } from './VerticalStepperContainer.styles';
import { Box } from '../Box';
import { VerticalStepper } from '../../navigation/VerticalStepper';

export const VERTICAL_STEPPER_CONTAINER_DEFAULT_PROPS = {
  disableContentPadding: false,
};
export const VERTICAL_STEPPER_CONTAINER_PROP_TYPES = {
  padding: PropTypes.number,
  disableContentPadding: PropTypes.bool,
};

const VerticalStepperContainer = forwardRef(
  ({ children, disableContentPadding, ...props }, ref) => {
    const { classes, cx } = VerticalStepperContainerStyles({ disableContentPadding });

    return (
      <Box ref={ref} className={classes.root}>
        <Box className={classes.stepper}>
          <VerticalStepper {...props} />
        </Box>
        <Box className={classes.content}>{children}</Box>
      </Box>
    );
  }
);

VerticalStepperContainer.defaultProps = VERTICAL_STEPPER_CONTAINER_DEFAULT_PROPS;
VerticalStepperContainer.propTypes = VERTICAL_STEPPER_CONTAINER_PROP_TYPES;

export { VerticalStepperContainer };
