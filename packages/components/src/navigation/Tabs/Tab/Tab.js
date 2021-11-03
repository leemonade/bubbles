import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { TabStyles } from './Tab.styles';

export const Tab = forwardRef(
  (
    {
      className,
      styles,
      active,
      variant = 'default',
      orientation = 'horizontal',
      label,
      leftIcon,
      rightIcon,
      buttonRef,
      ...props
    },
    ref
  ) => {
    const { classes, cx } = TabStyles({ orientation }, { styles, name: 'Tabs' });

    return (
      <button
        {...props}
        ref={buttonRef}
        tabIndex={active ? 0 : -1}
        className={cx(
          classes.tabControl,
          classes[variant],
          { [classes.tabActive]: active },
          className
        )}
        type="button"
        role="tab"
        aria-selected={active}
      >
        <div className={classes.tabInner}>
          {leftIcon && <span className={cx(classes.tabIcon, classes.tabLeftIcon)}>{leftIcon}</span>}
          {label && <div className={classes.tabLabel}>{label}</div>}
          {rightIcon && (
            <span className={cx(classes.tabIcon, classes.tabRightIcon)}>{rightIcon}</span>
          )}
        </div>
      </button>
    );
  }
);

Tab.propTypes = {
  active: PropTypes.bool,
  // color: MantineColor;
  variant: PropTypes.any,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
};
