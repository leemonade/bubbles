import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { isArray, isFunction, forEach } from 'lodash';
import { useLocation } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import { ComputerKeyboardNextIcon } from '@bubbles-ui/icons/outline';
import { MainNavStyles } from './MainNav.styles';
import { MainNavItem } from './MainNavItem/MainNavItem';
import { Avatar } from '../../informative';
import { SubNav } from '../SubNav';
import { Logo } from '../../misc';
import { ActionButton } from '../../form';
import { getActiveItem } from './helpers/getActiveItem';

export const MAIN_NAV_WIDTH = 52;
export const MAIN_NAV_DEFAULT_PROPS = {
  hideSubNavOnClose: true,
  useRouter: false,
};
export const MAIN_NAV_PROP_TYPES = {};

const MainNav = ({
  onClose,
  onOpen,
  menuData,
  isLoading,
  subNavWidth,
  hideSubNavOnClose,
  useRouter,
  ...props
}) => {
  const [activeItem, setActiveItem] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);
  const [showSubNav, setShowSubNav] = useState(false);
  const [showSubNavToggle, setShowSubNavToggle] = useState(false);

  // ······································································
  // HANDLERS

  const handleItemClick = (item) => {
    setActiveItem(item);
    const hasChildren = !item.children || (isArray(item.children) && item.children.length === 0);

    if (item.url && !hasChildren) {
      closeSubNav(false);
    }

    if (isArray(item.children) && item.children.length) {
      openSubNav(true);
    } else {
      closeSubNav(true);
    }
  };

  const handleRouteChange = () => {
    const items = getActiveItem(menuData);

    if (
      (items && items.activeItem && !activeItem) ||
      (items && items.activeItem && activeItem && items.activeItem.id !== activeItem.id)
    ) {
      handleItemClick(items.activeItem);
    }

    if (
      (items && items.activeSubItem && !activeSubItem) ||
      (items && items.activeSubItem && activeSubItem && items.activeSubItem.id !== activeSubItem.id)
    ) {
      setActiveSubItem(items.activeSubItem);
    }
  };

  const openSubNav = () => {
    setShowSubNav(true);
    setShowSubNavToggle(false);
    if (isFunction(onOpen)) onOpen();
  };

  const closeSubNav = () => {
    if (hideSubNavOnClose) setShowSubNav(false);
    setShowSubNavToggle(true);
    if (isFunction(onClose)) onClose();
  };

  // ······································································
  // WATCHERS
  const location = useLocation();

  useEffect(() => {
    if (isLoading || !menuData || (isArray(menuData) && !menuData.length)) {
      handleRouteChange();
    }
  }, [menuData, isLoading]);

  useEffect(() => {
    if (!isLoading && isArray(menuData) && menuData.length) {
      handleRouteChange();
    }
  }, [location]);

  // ······································································
  // STYLES

  const { classes, cx } = MainNavStyles(
    { itemWidth: MAIN_NAV_WIDTH, subNavWidth },
    { name: 'MainNav' }
  );

  return (
    <Box className={classes.root}>
      {/* MainNav */}
      <Box className={classes.navWrapper}>
        <Box className={classes.navContainer}>
          <Logo isotype className={classes.logo} />
          {/* Menu items */}
          <SimpleBar className={classes.navItems}>
            {isArray(menuData) &&
              menuData.map((item) => (
                <MainNavItem
                  key={item.id}
                  item={item}
                  itemWidth={MAIN_NAV_WIDTH}
                  active={activeItem?.id === item.id}
                  onClick={() => handleItemClick(item)}
                  useRouter={useRouter}
                />
              ))}
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
          className={classes.subNav}
          useRouter={useRouter}
        />
      )}

      {/* Open Sub Nav handler */}
      {showSubNavToggle && activeItem && activeItem.children.length > 0 && (
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
