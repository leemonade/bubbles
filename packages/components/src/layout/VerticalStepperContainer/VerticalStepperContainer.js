import React, { forwardRef, useMemo } from 'react';
import { VerticalStepperContainerStyles } from './VerticalStepperContainer.styles';
import { Box } from '../Box';
import { VerticalStepper } from '../../navigation/VerticalStepper/VerticalStepper';
import {
  VERTICAL_STEPPER_CONTAINER_DEFAULT_PROPS,
  VERTICAL_STEPPER_CONTAINER_PROP_TYPES,
  parseWidth,
} from './VerticalStepperContainer.constants';
import { ContentLegible } from './ContentLegible';

const VerticalStepperContainer = forwardRef(
  (
    { children, disableContentPadding, navWidth: navWidthProp, stickyAt, legible, ...props },
    ref,
  ) => {
    const navWidth = useMemo(() => parseWidth(navWidthProp), [navWidthProp]);
    const { classes } = VerticalStepperContainerStyles(
      { disableContentPadding, navWidth, stickyAt },
      { name: 'VerticalStepperContainer' },
    );

    const ContentWrapper = useMemo(() => (legible ? ContentLegible : Box), [legible]);

    return (
      <Box ref={ref} className={classes.root}>
        <Box className={classes.stepper}>
          <VerticalStepper {...props} />
        </Box>
        <Box className={classes.content}>
          <ContentWrapper navWidth={navWidth}>{children}</ContentWrapper>
        </Box>
      </Box>
    );
  },
);

VerticalStepperContainer.displayName = 'VerticalStepperContainer';
VerticalStepperContainer.defaultProps = VERTICAL_STEPPER_CONTAINER_DEFAULT_PROPS;
VerticalStepperContainer.propTypes = VERTICAL_STEPPER_CONTAINER_PROP_TYPES;

export { VerticalStepperContainer };
