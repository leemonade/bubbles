import React from 'react';
import { Box, Switch } from '@mantine/core';
import { ProSwitchStyles } from './ProSwitch.styles';

export const PRO_SWITCH_DEFAULT_PROPS = {
  onChange: () => {},
};
export const PRO_SWITCH_PROP_TYPES = {};

const ProSwitch = ({ color, icon, checked, onChange, ...props }) => {
  const { classes, cx } = ProSwitchStyles({ color });

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
      <Switch checked={state} onChange={stateChange} {...props} classNames={classes} />
    </Box>
  );
};

ProSwitch.defaultProps = PRO_SWITCH_DEFAULT_PROPS;
ProSwitch.propTypes = PRO_SWITCH_PROP_TYPES;

export { ProSwitch };
