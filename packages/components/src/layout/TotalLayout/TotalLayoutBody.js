import { Stack } from '../Stack';
import { Box } from '../Box';
import { TOTAL_LAYOUT_BODY_PROP_TYPES } from './TotalLayout.constants';
import { VerticalStepper } from '../../navigation';

const TotalLayoutBody = ({ showStepper, children, stepsInfo, activeStep, ...props }) => (
  <Stack
    justifyContent="center"
    fullWidth
    fullHeight
    style={{ backgroundColor: '#f8f9fb', overflow: 'auto', position: 'relative' }}
  >
    {showStepper && (
      <Box
        style={{
          width: 192,
          position: 'sticky',
          top: 0,
          marginRight: 16,
        }}
      >
        <VerticalStepper data={stepsInfo} currentStep={activeStep}></VerticalStepper>
      </Box>
    )}
    <Box style={{ width: 928 }}>{children}</Box>
  </Stack>
);

TotalLayoutBody.propTypes = TOTAL_LAYOUT_BODY_PROP_TYPES;

export default TotalLayoutBody;
