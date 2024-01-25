import React from 'react';
import { Progress as MantineProgress } from '@mantine/core';
import { Box, Text } from '@bubbles-ui/components';
import { isEmpty, trim } from 'lodash';
import {
  PROGRESSCOLORBAR_DEFAULT_PROPS,
  PROGRESSCOLORBAR_PROP_TYPES,
} from './ProgressColorBar.constants';
import { ProgressColorBarStyles } from './ProgressColorBar.styles';

const ProgressColorBar = ({
  animate,
  label,
  color: colorProp,
  radius,
  sections,
  size,
  striped,
  value,
  labelLeft,
  labelRight,
}) => {
  const { classes, theme } = ProgressColorBarStyles();

  const color = React.useMemo(() => {
    if (value < 25) {
      return theme.other.progress.content.color.phatic.negative;
    }
    if (value < 75) {
      return theme.other.progress.content.color.phatic.attention;
    }
    return theme.other.progress.content.color.phatic.positive;
  }, [value]);

  return (
    <Box>
      {labelLeft && labelRight && (
        <Box className={classes.topLabelsContainer}>
          <Text className={classes.labels}>{labelLeft}</Text>
          <Text className={classes.labels}>{labelRight}</Text>
        </Box>
      )}
      <MantineProgress
        value={value}
        label={label}
        color={trim(colorProp ?? '') !== '' ? colorProp : color}
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
