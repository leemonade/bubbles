import React, { forwardRef } from 'react';
import { Box, Text, TextClamp } from '@bubbles-ui/components';
import { ChipStyles } from './Chip.styles';
import { CHIP_PROP_TYPES } from './Chip.constants';

const Chip = forwardRef(
  ({ subject, isHidden, isCollisionDetected, truncate, truncateLines }, ref) => {
    const { classes } = ChipStyles({ isCollisionDetected }, { name: 'Chip' });
    const style = isHidden ? { visibility: 'hidden', position: 'absolute' } : {};

    return (
      <Box ref={ref} className={classes.root} style={style}>
        {truncate ? (
          <TextClamp lines={truncateLines}>
            <Text className={classes.label}>{subject}</Text>
          </TextClamp>
        ) : (
          <Text className={classes.label}>{subject}</Text>
        )}
      </Box>
    );
  },
);

Chip.propTypes = CHIP_PROP_TYPES;

Chip.displayName = 'Chip';
export { Chip };
