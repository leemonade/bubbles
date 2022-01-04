import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Text, Box } from '@mantine/core';
import { IconError } from './../../../assets/FaticIcons.js';
import { TabStyles } from './Tab.styles';

export const Tab = forwardRef(
  ({ id, active, tab, renderWrapper, onClick, onFocus, ...props }, ref) => {
    const { key, label, leftIcon, rightIcon, disabled, notification, hasError } = tab || {};

    if (!key) {
      return null;
    }

    const { classes, cx } = TabStyles({ disabled, active }, { name: 'Tab' });

    function onInternalClick(e) {
      if (disabled) {
        return;
      }
      onClick(e);
    }

    const node = (
      <button
        {...props}
        role="tab"
        key={key}
        ref={ref}
        aria-selected={active}
        id={id && `${id}-tab-${key}`}
        className={cx(classes.root, classes.default, { [classes.tabActive]: active })}
        aria-controls={id && `${id}-panel-${key}`}
        aria-disabled={disabled}
        tabIndex={active ? 0 : -1}
        onClick={(e) => {
          e.stopPropagation();
          onInternalClick(e);
        }}
        onFocus={onFocus}
        disabled={disabled}
      >
        <Box className={classes.tabInner}>
          {leftIcon && <Box className={cx(classes.tabIcon, classes.tabLeftIcon)}>{leftIcon}</Box>}
          {label && (
            <Text component="span" className={classes.tabLabel}>
              {label}
            </Text>
          )}
          {notification && <Box className={classes.tabBadge}>{notification}</Box>}
          {hasError && (
            <Box className={classes.tabError}>
              <IconError />
            </Box>
          )}
          {rightIcon && (
            <Box className={cx(classes.tabIcon, classes.tabRightIcon)}>{rightIcon}</Box>
          )}
        </Box>
      </button>
    );

    return renderWrapper ? renderWrapper(node) : node;
  }
);

Tab.propTypes = {
  id: PropTypes.string,
  tab: PropTypes.any,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  onResize: PropTypes.func,
  renderWrapper: PropTypes.node,
  onFocus: PropTypes.func,
};
