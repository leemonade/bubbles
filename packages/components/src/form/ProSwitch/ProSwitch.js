import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { isFunction } from 'lodash';
import { Switch } from '../Switch';
import { ProSwitchStyles } from './ProSwitch.styles';

export const PRO_SWITCH_DEFAULT_PROPS = {
  onChange: () => {},
  checked: false,
  color: '',
  useAria: true,
};
export const PRO_SWITCH_PROP_TYPES = {
  color: PropTypes.string,
  icon: PropTypes.node,
  checked: PropTypes.bool,
  ariaLabel: PropTypes.string,
  useAria: PropTypes.bool,
  onChange: PropTypes.func,
  classNames: PropTypes.any,
};

const ProSwitch = forwardRef(
  ({ color, icon, checked, onChange, classNames, ariaLabel, useAria, ...props }, ref) => {
    const { classes, cx } = ProSwitchStyles({ color, hasIcon: !!icon });

    if (classNames) {
      if (classNames.root) classes.root += ` ${classNames.root}`;
      if (classNames.input) classes.input += ` ${classNames.input}`;
      if (classNames.label) classes.label += ` ${classNames.label}`;
    }

    const [state, setState] = React.useState(checked);

    const handleOnChange = (isChecked) => {
      setState(isChecked);
      if (isFunction(onChange)) onChange(isChecked);
    };

    React.useEffect(() => {
      handleOnChange(checked);
    }, [checked]);

    return (
      <Box className={classes.container}>
        {icon ? (
          <Box
            className={cx({
              [classes.icon]: true,
              [classes.iconActive]: state,
            })}
          >
            {icon}
          </Box>
        ) : null}
        <Switch
          {...props}
          ref={ref}
          checked={state}
          onChange={handleOnChange}
          classNames={classes}
          aria-label={ariaLabel}
          role={useAria ? 'switch' : undefined}
          isPro
        />
      </Box>
    );
  },
);

ProSwitch.displayName = 'ProSwitch';
ProSwitch.defaultProps = PRO_SWITCH_DEFAULT_PROPS;
ProSwitch.propTypes = PRO_SWITCH_PROP_TYPES;

export { ProSwitch };
