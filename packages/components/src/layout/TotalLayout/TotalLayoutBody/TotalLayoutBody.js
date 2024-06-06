import React from 'react';
import { Stack } from '../../Stack';
import { Box } from '../../Box';
import {
  TOTAL_LAYOUT_BODY_PROP_TYPES,
  TOTAL_LAYOUT_BODY_DEFAULT_PROPS,
} from './TotalLayoutBody.constants';
import { TotalLayoutStepper as Stepper } from '../../../navigation';

const TotalLayoutBody = ({
  showStepper,
  children,
  stepsInfo,
  activeStep,
  completedSteps,
  scrollRef,
  lastValidStep,
}) => (
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
    {showStepper && (
      <Box
        style={{
          minWidth: 192,
          position: 'sticky',
          top: 0,
          marginRight: 16,
        }}
      >
        <Stepper
          data={stepsInfo}
          activeStep={activeStep}
          completedSteps={completedSteps}
          lastValidStep={lastValidStep}
        />
      </Box>
    )}
    <Box style={{ minWidth: 928 }}>{children}</Box>
  </Stack>
);

TotalLayoutBody.propTypes = TOTAL_LAYOUT_BODY_PROP_TYPES;
TotalLayoutBody.defaultProps = TOTAL_LAYOUT_BODY_DEFAULT_PROPS;

export default TotalLayoutBody;
