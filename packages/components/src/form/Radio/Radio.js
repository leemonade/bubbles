import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box, Radio as MantineRadio } from '@mantine/core';
import { RadioStyles } from './Radio.styles';

export const RADIO_HELP_POSITIONS = ['right', 'bottom'];
export const RADIO_VARIANTS = ['default', 'boxed', 'icon'];

const Radio = forwardRef(
  ({ children, checked, variant, help, helpPosition, icon, size, useAria, ...props }, ref) => {
    if (variant === 'icon') {
      help = '';
    }

    const { classes, cx } = RadioStyles(
      { checked, variant, help, helpPosition, size },
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
          <Box className={classes.container}>
            {variant === 'icon' && <Box className={classes.icon}>{icon}</Box>}
            {children && <Box className={classes.title}>{children}</Box>}
            {help !== '' && <Box className={classes.help}>{help}</Box>}
          </Box>
        }
        role={useAria ? 'radio' : undefined}
      />
    );
  }
);

Radio.defaultProps = {
  variant: RADIO_VARIANTS[0],
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
