import React, { forwardRef } from 'react';
import { VerticalContainerStyles } from './VerticalContainer.styles';
import { Box } from '../Box';
import { Stack } from '../Stack';
import {
  VERTICAL_CONTAINER_DEFAULT_PROPS,
  VERTICAL_CONTAINER_PROP_TYPES,
} from './VerticalContainer.constants';

const VerticalContainer = forwardRef(({ children, scrollRef, leftZone, ...props }, ref) => {
  const { classes } = VerticalContainerStyles({ name: 'VerticalStepperContainer' });

  return (
    <Box ref={ref} className={classes.root}>
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
        <Box className={classes.stepper}>{leftZone}</Box>
        <Box className={classes.content}>{children}</Box>
      </Stack>
    </Box>
  );
});

VerticalContainer.displayName = 'VerticalContainer';
VerticalContainer.defaultProps = VERTICAL_CONTAINER_DEFAULT_PROPS;
VerticalContainer.propTypes = VERTICAL_CONTAINER_PROP_TYPES;

export { VerticalContainer };
