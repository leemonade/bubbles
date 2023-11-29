import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ActionButton } from '@bubbles-ui/components';
import { ButtonStyles } from './Button.styles';

export const BUTTON_POSITIONS = ['start', 'center', 'end', 'default'];
export const BUTTON_DEFAULT_PROPS = {
  label: '',
  actived: false,
  position: 'default',
};

export const BUTTON_PROP_TYPES = {
  icon: PropTypes.node,
  label: PropTypes.string,
  actived: PropTypes.bool,
  position: PropTypes.oneOf(BUTTON_POSITIONS),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  classNames: PropTypes.object,
  children: PropTypes.node,
  ariaLabel: PropTypes.string,
};

const Button = forwardRef(
  ({ icon, label, actived, position, disabled, onClick, classNames, children, ariaLabel }, ref) => {
    const { classes, cx } = ButtonStyles({ actived, position }, { classNames });

    return (
      <ActionButton
        ref={ref}
        icon={icon}
        classNames={classes}
        tooltip={disabled ? '' : label}
        onClick={onClick}
        disabled={disabled}
        ariaLabel={ariaLabel}
      >
        {children}
      </ActionButton>
    );
  },
);

Button.displayName = 'Button';
Button.defaultProps = BUTTON_DEFAULT_PROPS;
Button.propTypes = BUTTON_PROP_TYPES;

export { Button };
