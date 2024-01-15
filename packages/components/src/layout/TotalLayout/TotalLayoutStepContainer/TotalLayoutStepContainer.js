import React from 'react';
import { Title } from '../../../typography';
import { Stack } from '../../Stack';
import { Box } from '../../Box';
import {
  TOTAL_LAYOUT_STEP_CONTAINER_PROP_TYPES,
  TOTAL_LAYOUT_STEP_CONTAINER_DEFAULT_PROPS,
} from './TotalLayoutStepContainer.constants';
import { TotalLayoutStepContainerStyles } from './TotalLayoutStepContainer.styles';

const TotalLayoutStepContainer = ({ stepName, fullWidth, children, Footer, clean }) => {
  const { classes } = TotalLayoutStepContainerStyles(
    { hasFooter: !!Footer, clean, fullWidth },
    { name: 'TotalLayoutStepContainer' },
  );

  return (
    <Stack className={classes.stepContainer} direction="column">
      {stepName && (
        <Title className={classes.stepName} order={2} noFlex>
          {stepName}
        </Title>
      )}
      <Stack className={classes.formContainer} fullWidth direction="column">
        {children}
      </Stack>
      {!!Footer && <Box noFlex>{Footer}</Box>}
    </Stack>
  );
};

TotalLayoutStepContainer.propTypes = TOTAL_LAYOUT_STEP_CONTAINER_PROP_TYPES;
TotalLayoutStepContainer.defaultProps = TOTAL_LAYOUT_STEP_CONTAINER_DEFAULT_PROPS;

export { TotalLayoutStepContainer };
