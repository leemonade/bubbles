import React, { forwardRef, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { Menu as MantineMenu } from '@mantine/core';
import { SettingMenuHorizontalIcon } from '@bubbles-ui/icons/solid';
import { ActionButton } from '../../form/ActionButton';
import { MenuStyles } from './Menu.styles';

export const MENU_POSITIONS = [
  'bottom',
  'top',
  'left',
  'right',
  'bottom-start',
  'bottom-end',
  'top-start',
  'top-end',
  'left-start',
  'left-end',
  'right-start',
  'right-end',
];

export const MENU_DEFAULT_PROPS = {
  items: [],
  position: 'bottom',
  offset: 0,
  withArrow: false,
  menuButtonLabel: 'Menu button',
};
export const MENU_PROP_TYPES = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      children: PropTypes.node,
      rightSection: PropTypes.node,
      disabled: PropTypes.bool,
      className: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ),
  position: PropTypes.oneOf(MENU_POSITIONS),
  offset: PropTypes.number,
  withArrow: PropTypes.bool,
  control: PropTypes.node,
  menuButtonLabel: PropTypes.string,
  shadow: PropTypes.bool,
  dropdownWidth: PropTypes.any,
};

const Menu = forwardRef(({ items, shadow, control: controlProp, dropdownWidth, ...props }, ref) => {
  const { classes } = MenuStyles({ dropdownWidth });
  const control = useMemo(() => {
    if (isEmpty(controlProp)) {
      return <ActionButton icon={<SettingMenuHorizontalIcon />} />;
    }
    return controlProp;
  }, [controlProp]);

  const renderMenuItems = useCallback(
    () =>
      items.map((item, index) => {
        if (item.divider) return <MantineMenu.Divider />;
        if (!item.onClick) return <MantineMenu.Label {...item} key={index} />;
        return <MantineMenu.Item {...item} key={index} />;
      }),
    [items],
  );

  return (
    <MantineMenu {...props} ref={ref} classNames={classes}>
      <MantineMenu.Target>{control}</MantineMenu.Target>
      <MantineMenu.Dropdown>{renderMenuItems()}</MantineMenu.Dropdown>
    </MantineMenu>
  );
});

Menu.displayName = 'Menu';
Menu.defaultProps = MENU_DEFAULT_PROPS;
Menu.propTypes = MENU_PROP_TYPES;

export { Menu };
