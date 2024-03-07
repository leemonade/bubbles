import React, { forwardRef } from 'react';
import { Box, Text } from '@bubbles-ui/components';
import { ChipStyles } from './Chip.styles';
import { CHIP_PROP_TYPES } from './Chip.constants';

const Chip = forwardRef(({ subject, isHidden, isCollisionDetected }, ref) => {
  const { classes } = ChipStyles({ isCollisionDetected }, { name: 'Chip' });
  const style = isHidden ? { visibility: 'hidden', position: 'absolute' } : {};
  return (
    <Box ref={ref} className={classes.root} style={style}>
      <Text className={classes.label}>{subject}</Text>
    </Box>
  );
});

Chip.propTypes = CHIP_PROP_TYPES;

Chip.displayName = 'Chip';
export { Chip };
