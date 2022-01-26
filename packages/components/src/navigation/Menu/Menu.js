import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Menu as MantineMenu, MenuItem } from '@mantine/core';
import { MenuStyles } from './Menu.styles';

export const MENU_POSITIONS = ['bottom', 'top', 'left', 'right'];
export const MENU_PLACEMENT = ['start', 'center', 'end'];

export const MENU_DEFAULT_PROPS = {
  items: [],
  position: 'bottom',
  placement: 'center',
  gutter: 0,
  withArrow: false,
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
    })
  ),
  position: PropTypes.oneOf(MENU_POSITIONS),
  placement: PropTypes.oneOf(MENU_PLACEMENT),
  gutter: PropTypes.number,
  withArrow: PropTypes.bool,
};

const Menu = forwardRef(({ items, shadow, ...props }, ref) => {
  const { classes, cx } = MenuStyles({});

  return (
    <MantineMenu {...props} ref={ref} classNames={classes}>
      {items.map((item, index) => (
        <MenuItem {...item} key={index} />
      ))}
    </MantineMenu>
  );
});

Menu.defaultProps = MENU_DEFAULT_PROPS;
Menu.propTypes = MENU_PROP_TYPES;

export { Menu };
