import React from 'react';
import { Progress as MantineProgress } from '@mantine/core';
import { Box, Text } from '@bubbles-ui/components';
import {
  PROGRESSCOLORBAR_DEFAULT_PROPS,
  PROGRESSCOLORBAR_PROP_TYPES,
} from './ProgressColorBar.constants';
import { ProgressColorBarStyles } from './ProgressColorBar.styles';

const ProgressColorBar = ({
  animate,
  label,
  color,
  radius,
  sections,
  size,
  striped,
  value,
  labelLeft,
  labelRight,
}) => {
  const { classes } = ProgressColorBarStyles();
  return (
    <Box>
      {labelLeft && labelRight && (
        <Box className={classes.topLabelsContainer}>
          <Text>{labelLeft}</Text>
          <Text>{labelRight}</Text>
        </Box>
      )}
      <MantineProgress
        value={value}
        label={label}
        color={color}
        animate={animate}
        radius={radius}
        sections={sections}
        size={size}
        striped={striped}
      />
    </Box>
  );
};

ProgressColorBar.propTypes = PROGRESSCOLORBAR_PROP_TYPES;
ProgressColorBar.defaultProps = PROGRESSCOLORBAR_DEFAULT_PROPS;
ProgressColorBar.displayName = 'ProgressColorBar';

export { ProgressColorBar };
export default ProgressColorBar;
