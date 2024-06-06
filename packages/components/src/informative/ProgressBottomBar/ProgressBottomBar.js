import React from 'react';
import { Progress as MantineProgress } from '@mantine/core';
import { Box, Text } from '@bubbles-ui/components';
import {
  PROGRESSBOTTOMBAR_DEFAULT_PROPS,
  PROGRESSBOTTOMBAR_PROP_TYPES,
} from './ProgressBottomBar.constants';
import { ProgressBottomBarStyles } from './ProgressBottomBar.styles';

const ProgressBottomBar = ({
  animate,
  label,
  labelTop,
  color,
  radius,
  sections,
  size,
  striped,
  value,
}) => {
  const { classes, theme } = ProgressBottomBarStyles();
  return (
    <Box>
      {labelTop && (
        <Box className={classes.topLabelContainer}>
          <Text className={classes.labelTop}>{labelTop}</Text>
        </Box>
      )}
      <MantineProgress
        value={value}
        label={label}
        color={'#4D5358'}
        animate={animate}
        radius={radius}
        sections={sections}
        size={size}
        striped={striped}
      />
    </Box>
  );
};

ProgressBottomBar.propTypes = PROGRESSBOTTOMBAR_PROP_TYPES;
ProgressBottomBar.defaultProps = PROGRESSBOTTOMBAR_DEFAULT_PROPS;
ProgressBottomBar.displayName = 'ProgressBottomBar';

export { ProgressBottomBar };
export default ProgressBottomBar;
