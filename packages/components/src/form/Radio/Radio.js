import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box, Radio as MantineRadio } from '@mantine/core';
import { RadioStyles } from './Radio.styles';

export const RADIO_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];
export const RADIO_HELP_POSITIONS = ['right', 'bottom'];
export const RADIO_VARIANTS = ['default', 'boxed', 'icon'];

const Radio = forwardRef(
  (
    { children, label, checked, variant, help, helpPosition, icon, size, useAria, ...props },
    ref
  ) => {
    const { classes, cx } = RadioStyles(
      { checked, variant, help, helpPosition, icon, children, label },
      { name: 'Radio' }
    );

    return (
      <MantineRadio
        {...props}
        size={size}
        checked={checked}
        ref={ref}
        classNames={classes}
        label={
          (variant === 'icon' && icon) || label || children || help ? (
            <Box className={classes.container}>
              {variant === 'icon' && icon && <Box className={classes.icon}>{icon}</Box>}
              {(label || children) && <Box className={classes.title}>{label || children}</Box>}
              {help && variant !== 'icon' && <Box className={classes.help}>{help}</Box>}
            </Box>
          ) : undefined
        }
        role={useAria ? 'radio' : undefined}
      />
    );
  }
);

Radio.defaultProps = {
  variant: RADIO_VARIANTS[0],
  size: 'md',
  help: '',
  helpPosition: RADIO_HELP_POSITIONS[0],
  useAria: true,
};

Radio.propTypes = {
  /** The text inside Radio element (label) */
  children: PropTypes.node,
  /** Help text */
  help: PropTypes.string,
  /** Controls the help position */
  helpPosition: PropTypes.oneOf(RADIO_HELP_POSITIONS),
  /** Controls the appearance */
  variant: PropTypes.oneOf(RADIO_VARIANTS),
  /** Controls the radio icon */
  icon: PropTypes.node,
  /** Controls disabled state */
  disabled: PropTypes.bool,
  /** Controls if Radio uses aria role */
  useAria: PropTypes.bool,
};

export { Radio };
