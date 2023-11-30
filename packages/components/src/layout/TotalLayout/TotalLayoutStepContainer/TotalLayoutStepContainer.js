import { ContextContainer } from '../../ContextContainer';
import { Stack } from '../../Stack';
import {
  TOTAL_LAYOUT_STEP_CONTAINER_PROP_TYPES,
  TOTAL_LAYOUT_STEP_CONTAINER_DEFAULT_PROPS,
} from './TotalLayoutStepContainer.constants';

const TotalLayoutStepContainer = ({ stepName, children }) => (
  <ContextContainer title={stepName} style={{ padding: '24px 0 0 0 ', height: '100%' }}>
    <Stack style={{ backgroundColor: 'white', padding: '16px 24px' }} fullWidth>
      {children}
    </Stack>
  </ContextContainer>
);

TotalLayoutStepContainer.propTypes = TOTAL_LAYOUT_STEP_CONTAINER_PROP_TYPES;
TotalLayoutStepContainer.defaultProps = TOTAL_LAYOUT_STEP_CONTAINER_DEFAULT_PROPS;

export { TotalLayoutStepContainer };
