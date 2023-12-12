import { Text } from '../../../typography';
import { Stack } from '../../Stack';
import {
  TOTAL_LAYOUT_STEP_CONTAINER_PROP_TYPES,
  TOTAL_LAYOUT_STEP_CONTAINER_DEFAULT_PROPS,
} from './TotalLayoutStepContainer.constants';
import { TotalLayoutStepContainerStyles } from './TotalLayoutStepContainer.styles';

const TotalLayoutStepContainer = ({ stepName, children }) => {
  const { classes } = TotalLayoutStepContainerStyles();

  return (
    <Stack className={classes.stepContainer} direction="column">
      {stepName && (
        <Text className={classes.stepName} style={{ marginBottom: '8px' }} as="h1" color="primary">
          {stepName}
        </Text>
      )}
      <Stack className={classes.formContainer} fullWidth fullHeight>
        {children}
      </Stack>
    </Stack>
  );
};

TotalLayoutStepContainer.propTypes = TOTAL_LAYOUT_STEP_CONTAINER_PROP_TYPES;
TotalLayoutStepContainer.defaultProps = TOTAL_LAYOUT_STEP_CONTAINER_DEFAULT_PROPS;

export { TotalLayoutStepContainer };
