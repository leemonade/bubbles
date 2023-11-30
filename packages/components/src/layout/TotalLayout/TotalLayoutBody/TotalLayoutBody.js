import React from 'react';
import { Stack } from '../../Stack';
import { Box } from '../../Box';
import {
  TOTAL_LAYOUT_BODY_PROP_TYPES,
  TOTAL_LAYOUT_BODY_DEFAULT_PROPS,
} from './TotalLayoutBody.constants';
import { VerticalStepper } from '../../../navigation';

const TotalLayoutBody = ({ showStepper, children, stepsInfo, activeStep, scrollRef }) => (
  <Stack
    ref={scrollRef}
    justifyContent="center"
    fullWidth
    fullHeight
    style={{ backgroundColor: '#f8f9fb', overflow: 'auto', position: 'relative' }}
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
        <VerticalStepper data={stepsInfo} currentStep={activeStep} />
      </Box>
    )}
    <Box style={{ maxWidth: 928 }}>{children}</Box>
  </Stack>
);

TotalLayoutBody.propTypes = TOTAL_LAYOUT_BODY_PROP_TYPES;
TotalLayoutBody.defaultProps = TOTAL_LAYOUT_BODY_DEFAULT_PROPS;

export default TotalLayoutBody;
