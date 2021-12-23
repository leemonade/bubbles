import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Box, Avatar } from '@mantine/core';
import SimpleBar from 'simplebar-react';
import { Link, useHistory } from 'react-router-dom';
import { MainNavStyles } from './MainNav.styles';
import { MainNavItem } from './MainNavItem/MainNavItem';
import { SubNav } from '../SubNav';
import { Logo } from '../../misc';

const MAINNAV_WIDTH = 52;

const MENU = [
  {
    id: '6c390737-0f7f-4ad1-b923-74762c5eeb35',
    menuKey: 'plugins.menu-builder.main',
    key: 'plugins.users.users',
    parentKey: null,
    pluginName: 'plugins.users',
    order: null,
    fixed: 0,
    iconName: null,
    activeIconName: null,
    iconSvg: 'https://s3.eu-west-1.amazonaws.com/global-assets.leemons.io/user_313388f6d8.svg',
    activeIconSvg:
      'https://s3.eu-west-1.amazonaws.com/global-assets.leemons.io/user_Active_52e4e75973.svg',
    iconAlt: null,
    url: null,
    window: 'SELF',
    disabled: null,
    created_at: '2021-11-08T09:48:02.000Z',
    updated_at: '2021-11-08T09:48:02.000Z',
    label: 'Usuarios',
    childrens: [
      {
        id: 'a716ee71-a0bc-4742-8d9c-e9a457556095',
        menuKey: 'plugins.menu-builder.main',
        key: 'plugins.users.user-data',
        parentKey: 'plugins.users.users',
        pluginName: 'plugins.users',
        order: null,
        fixed: 0,
        iconName: null,
        activeIconName: null,
        iconSvg: null,
        activeIconSvg: null,
        iconAlt: null,
        url: '/private/users/user-data',
        window: 'SELF',
        disabled: null,
        created_at: '2021-11-08T09:48:03.000Z',
        updated_at: '2021-11-08T09:48:03.000Z',
        label: 'Datos del usuario',
        childrens: [],
        customChildrens: [],
      },
      {
        id: 'a752ae34-d64f-45b5-a637-f5ee338840e9',
        menuKey: 'plugins.menu-builder.main',
        key: 'plugins.users.welcome',
        parentKey: 'plugins.users.users',
        pluginName: 'plugins.users',
        order: null,
        fixed: 0,
        iconName: null,
        activeIconName: null,
        iconSvg: null,
        activeIconSvg: null,
        iconAlt: null,
        url: '/private/users/welcome',
        window: 'SELF',
        disabled: null,
        created_at: '2021-11-08T09:48:03.000Z',
        updated_at: '2021-11-08T09:48:03.000Z',
        label: 'Bienvenida',
        childrens: [],
        customChildrens: [],
      },
      {
        id: 'b9f00e57-4618-4863-946d-a52625c9bc9a',
        menuKey: 'plugins.menu-builder.main',
        key: 'plugins.users.profile-list',
        parentKey: 'plugins.users.users',
        pluginName: 'plugins.users',
        order: null,
        fixed: 0,
        iconName: null,
        activeIconName: null,
        iconSvg: null,
        activeIconSvg: null,
        iconAlt: null,
        url: '/private/users/profiles/list',
        window: 'SELF',
        disabled: null,
        created_at: '2021-11-08T09:48:03.000Z',
        updated_at: '2021-11-08T09:48:03.000Z',
        label: 'Perfiles',
        childrens: [],
        customChildrens: [],
      },
    ],
    customChildrens: [],
  },
];

export const MainNav = ({ children, onClose, onOpen, ...props }) => {
  const [state, setState] = useState({
    menuActive: { ...MENU[0].childrens[0], parent: MENU[0] },
    menu: MENU,
  });
  const { classes, cx } = MainNavStyles({ itemWidth: MAINNAV_WIDTH });

  const onNavItemClick = useCallback(
    (parent) => {
      setState({ ...state, menuActive: { ...state.menuActive, parent } });

      let openSubMenu = true;
      let closeSubMenu = false;
      if (parent.url) {
        openSubMenu = false;
        closeSubMenu = true;
      }
      if (parent.childrens) {
        openSubMenu = true;
        closeSubMenu = false;
      }
      if (closeSubMenu) {
        closeMenu();
      }
      if (openSubMenu) {
        openMenu();
      }
    },
    [state]
  );

  const openMenu = useCallback(() => {
    if (onOpen) onOpen();
  }, [state]);

  const closeMenu = useCallback(() => {
    if (onClose) onClose();
  }, [state]);

  const onCloseSubMenu = async () => {
    setState({ ...state, menuActive: MENU[0].childrens[0] });
    closeMenu();
  };

  const getItem = (item) => {
    if (item.url) {
      return (
        <Link key={item.id} to={item.url}>
          <MainNavItem
            onClick={() => onNavItemClick(item)}
            active={state.menuActive?.parent?.id === item.id}
            item={item}
            itemWidth={MAINNAV_WIDTH}
          />
        </Link>
      );
    }
    return (
      <MainNavItem
        onClick={() => onNavItemClick(item)}
        key={item.id}
        active={state.menuActive?.parent?.id === item.id}
        item={item}
        itemWidth={MAINNAV_WIDTH}
      />
    );
  };

  return (
    <Box className={classes.root}>
      {/* MainNav */}
      <Box className={classes.navWrapper}>
        <Box className={classes.navContainer}>
          <Logo isotype className={classes.logo} />
          {/* Menu items */}
          <SimpleBar className={classes.navItems}>
            {state.menu && state.menuActive ? state.menu.map((item) => getItem(item)) : null}
          </SimpleBar>
          <Avatar mx="auto" mb={10} radius="xl">
            LE
          </Avatar>
        </Box>
      </Box>

      {/* Sub Nav */}
      {state.menuActive ? (
        <SubNav
          item={state.menuActive.parent}
          activeItem={state.menuActive.child}
          onClose={onCloseSubMenu}
          state={state}
          setState={setState}
        />
      ) : null}
    </Box>
  );
};

MainNav.propTypes = {};
