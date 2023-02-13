import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box, Radio as MantineRadio } from '@mantine/core';
import { RadioStyles } from './Radio.styles';
import { ImageLoader } from '../../misc';
import { isFunction } from 'lodash';

export const RADIO_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];
export const RADIO_HELP_POSITIONS = ['right', 'bottom'];
export const RADIO_VARIANTS = ['default', 'boxed', 'icon', 'image'];

const Radio = forwardRef(
  (
    {
      children,
      label,
      checked,
      variant,
      help,
      helpPosition,
      icon,
      image,
      imageHeight,
      size,
      useAria,
      onChange,
      ...props
    },
    ref
  ) => {
    const { classes, cx } = RadioStyles(
      { checked, variant, help, helpPosition, icon, image, children, label },
      { name: 'Radio' }
    );

    const handleOnChange = () => {
      if (isFunction(onChange)) onChange(!checked);
    };

    return (
      <Box className={classes.imageWrapper} onClick={handleOnChange}>
        {variant === 'image' && image && (
          <Box className={classes.image}>
            {typeof image === 'string' ? (
              <ImageLoader forceImage src={image} height={imageHeight} />
            ) : (
              image
            )}
          </Box>
        )}
        <MantineRadio
          {...props}
          size={size}
          checked={checked}
          ref={ref}
          classNames={classes}
          onChange={onChange}
          label={
            (variant === 'icon' && icon) ||
            (variant === 'image' && image) ||
            label ||
            children ||
            help ? (
              <Box className={classes.container}>
                {variant === 'icon' && icon && <Box className={classes.icon}>{icon}</Box>}

                {(label || children) && <Box className={classes.title}>{label || children}</Box>}
                {help && variant !== 'icon' && <Box className={classes.help}>{help}</Box>}
              </Box>
            ) : undefined
          }
          role={useAria ? 'radio' : undefined}
        />
      </Box>
    );
  }
);

Radio.defaultProps = {
  variant: RADIO_VARIANTS[0],
  size: 'md',
  help: '',
  helpPosition: RADIO_HELP_POSITIONS[0],
  useAria: true,
  imageHeight: 100,
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
