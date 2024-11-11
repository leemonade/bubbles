import React from 'react';
import { RingProgress } from '@mantine/core';
import { ProgressRingStyles } from './ProgressRing.styles';
import {
  PROGRESS_RING_DEFAULT_PROPS,
  PROGRESS_RING_PROP_TYPES,
  PROGRESSRING_SIZES,
} from './ProgressRing.constants';

const ProgressRing = ({ sections, label, roundCaps, size, thickness, rootColor }) => {
  const { classes } = ProgressRingStyles({ rootColor }, { name: 'ProgressRing' });

  const sizeValue = PROGRESSRING_SIZES.includes(size) ? size : PROGRESSRING_SIZES[2];
  const sizeHandler = {
    xxs: 28,
    xs: 56,
    sm: 82,
    md: 92,
    lg: 102,
    xl: 124,
  };

  return (
    <RingProgress
      sections={sections}
      label={label}
      roundCaps={roundCaps}
      size={sizeHandler[sizeValue]}
      thickness={thickness}
      classNames={classes}
    />
  );
};

ProgressRing.defaultProps = PROGRESS_RING_DEFAULT_PROPS;
ProgressRing.propTypes = PROGRESS_RING_PROP_TYPES;
ProgressRing.displayName = 'ProgressRing';

export { ProgressRing };
export default ProgressRing;
