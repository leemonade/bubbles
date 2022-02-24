import React, { forwardRef } from 'react';
import { Box, Switch } from '@mantine/core';
import { ProSwitchStyles } from './ProSwitch.styles';

export const PRO_SWITCH_DEFAULT_PROPS = {
  onChange: () => {},
};
export const PRO_SWITCH_PROP_TYPES = {};

const ProSwitch = forwardRef(({ color, icon, checked, onChange, classNames, ...props }, ref) => {
  const { classes, cx } = ProSwitchStyles({ color, hasIcon: !!icon });

  if (classNames) {
    if (classNames.root) classes.root += ` ${classNames.root}`;
    if (classNames.input) classes.input += ` ${classNames.input}`;
    if (classNames.label) classes.label += ` ${classNames.label}`;
  }

  const [state, setState] = React.useState(checked);

  function stateChange(event) {
    setState(event.target.checked);
    onChange(event.target.checked);
  }

  React.useEffect(() => {
    setState(setState);
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
      <Switch ref={ref} checked={state} onChange={stateChange} {...props} classNames={classes} />
    </Box>
  );
});

ProSwitch.defaultProps = PRO_SWITCH_DEFAULT_PROPS;
ProSwitch.propTypes = PRO_SWITCH_PROP_TYPES;

export { ProSwitch };
