import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { isArray, isFunction, forEach } from 'lodash';
import SimpleBar from 'simplebar-react';
import { Link, useHistory } from 'react-router-dom';
import { ComputerKeyboardNextIcon } from '@bubbles-ui/icons/outline';
import { MainNavStyles } from './MainNav.styles';
import { MainNavItem } from './MainNavItem/MainNavItem';
import { Avatar } from '../../informative';
import { SubNav } from '../SubNav';
import { Logo } from '../../misc';
import { ActionButton } from '../../form';
import { getActiveItem } from './helpers/getActiveItem';

export const MAIN_NAV_WIDTH = 52;
export const MAIN_NAV_DEFAULT_PROPS = {};
export const MAIN_NAV_PROP_TYPES = {};

const MainNav = ({ onClose, onOpen, menuData, isLoading, ...props }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);
  const [showSubNav, setShowSubNav] = useState(false);
  const history = useHistory();

  // ······································································
  // HANDLERS

  const handleItemClick = useCallback((item) => {
    setActiveItem(item);
    const hasChildren = !item.children || (isArray(item.children) && item.children.length === 0);

    if (item.url && !hasChildren) {
      closeSubNav(false);
    }
    if (item.children) {
      openSubNav(true);
    }
  }, []);

  const handleRouteChange = useCallback(() => {
    if (isLoading) {
      setTimeout(() => {
        handleRouteChange();
      }, 100);
    } else {
      const items = getActiveItem(menuData);

      if (items && activeItem && items.activeItem.id !== activeItem.id) {
        handleItemClick(items.activeItem);
      }

      if (
        items &&
        activeSubItem &&
        items.activeSubItem &&
        items.activeSubItem.id !== activeSubItem.id
      ) {
        setActiveSubItem(items.activeSubItem);
      }
    }
  }, [menuData]);

  const openSubNav = useCallback(() => {
    setShowSubNav(true);
    if (isFunction(onOpen)) onOpen();
  }, []);

  const closeSubNav = useCallback(() => {
    setShowSubNav(false);
    if (isFunction(onClose)) onClose();
  }, []);

  // ······································································
  // WATCHERS

  useEffect(() => {
    let callback;
    if (history) {
      callback = history.listen(() => handleRouteChange());
    }
    // TODO: Check this functionality
    // handleRouteChange();
    return () => callback && callback();
  }, []);

  // ······································································
  // STYLES

  const { classes, cx } = MainNavStyles({ itemWidth: MAIN_NAV_WIDTH });

  // ······································································
  // SUB-COMPONENTS

  const getItem = (item) => {
    if (item.url) {
      return (
        <Link key={item.id} to={item.url}>
          <MainNavItem
            item={item}
            itemWidth={MAIN_NAV_WIDTH}
            active={activeItem?.id === item.id}
            onClick={() => handleItemClick(item)}
          />
        </Link>
      );
    }
    return (
      <MainNavItem
        key={item.id}
        item={item}
        itemWidth={MAIN_NAV_WIDTH}
        active={activeItem?.id === item.id}
        onClick={() => handleItemClick(item)}
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
            {menuData && menuData.map((item) => getItem(item))}
          </SimpleBar>
          <Avatar mx="auto" mb={10} radius="xl">
            LE
          </Avatar>
        </Box>
      </Box>

      {/* Sub Nav */}
      {showSubNav && activeItem && activeItem.children.length > 0 && (
        <SubNav
          item={activeItem}
          subItems={activeItem.children}
          customItems={activeItem.customChildren}
          activeItem={activeSubItem}
          onItemClick={(item) => setActiveSubItem(item)}
          onClose={closeSubNav}
        />
      )}

      {/* Open Sub Nav handler */}
      {!showSubNav && activeItem && activeItem.children.length > 0 && (
        <Box className={classes.subNavHandler}>
          <ActionButton
            icon={<ComputerKeyboardNextIcon />}
            tooltip="Open"
            variant="solid"
            color="negative"
            style={{ borderRadius: '0 3px 3px 0' }}
            onClick={openSubNav}
          />
        </Box>
      )}
    </Box>
  );
};

export { MainNav };

MainNav.defaultProps = MAIN_NAV_DEFAULT_PROPS;
MainNav.propTypes = MAIN_NAV_PROP_TYPES;
