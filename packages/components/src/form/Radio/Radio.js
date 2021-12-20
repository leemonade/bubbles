import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Radio as MantineRadio, Box } from '@mantine/core';
import { RadioStyles } from './Radio.styles';

export const HELP_TEXT_POSITIONS = ['right', 'bottom'];
export const RADIO_VARIANTS = ['default', 'boxed', 'icon'];

const Radio = forwardRef(
  (
    {
      children,
      variant = RADIO_VARIANTS[0],
      helpText,
      withHelpText = false,
      helpTextPosition = HELP_TEXT_POSITIONS[0],
      icon,
      ...props
    },
    ref
  ) => {
    if (variant === 'icon') {
      withHelpText = false;
    }

    const { classes, cx } = RadioStyles(
      { variant, withHelpText, helpTextPosition },
      { name: 'Radio' }
    );

    return (
      <MantineRadio {...props} ref={ref} classNames={classes}>
        <Box className={classes.container}>
          {variant === 'icon' && <Box className={classes.icon}>{icon}</Box>}
          <Box className={classes.title}>{children}</Box>
          {withHelpText && <Box className={classes.helpText}>{helpText}</Box>}
        </Box>
      </MantineRadio>
    );
  }
);

Radio.propTypes = {
  children: PropTypes.node,
  helpText: PropTypes.string,
  withHelpText: PropTypes.bool,
  helpTextPosition: PropTypes.oneOf(HELP_TEXT_POSITIONS),
  variant: PropTypes.oneOf(RADIO_VARIANTS),
  icon: PropTypes.node,
};

export { Radio };
