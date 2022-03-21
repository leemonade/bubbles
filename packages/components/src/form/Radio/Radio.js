import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box, Radio as MantineRadio } from '@mantine/core';
import { RadioStyles } from './Radio.styles';

export const RADIO_HELP_POSITIONS = ['right', 'bottom'];
export const RADIO_VARIANTS = ['default', 'boxed', 'icon'];

const Radio = forwardRef(
  (
    {
      children,
      checked,
      variant = RADIO_VARIANTS[0],
      help = '',
      helpPosition = RADIO_HELP_POSITIONS[0],
      icon,
      ...props
    },
    ref
  ) => {
    if (variant === 'icon') {
      help = '';
    }

    const { classes, cx } = RadioStyles(
      { checked, variant, help, helpPosition },
      { name: 'Radio' }
    );

    console.log(props);

    return (
      <MantineRadio
        {...props}
        checked={checked}
        ref={ref}
        classNames={classes}
        label={
          <Box className={classes.container}>
            {variant === 'icon' && <Box className={classes.icon}>{icon}</Box>}
            <Box className={classes.title}>{children}</Box>
            {help !== '' && <Box className={classes.help}>{help}</Box>}
          </Box>
        }
      />
    );
  }
);

Radio.propTypes = {
  children: PropTypes.node,
  help: PropTypes.string,
  helpPosition: PropTypes.oneOf(RADIO_HELP_POSITIONS),
  variant: PropTypes.oneOf(RADIO_VARIANTS),
  icon: PropTypes.node,
  disabled: PropTypes.bool,
};

export { Radio };
