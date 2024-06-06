import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useClickOutside } from '@mantine/hooks';
import { openSpotlight } from '@mantine/spotlight';
import { find, isArray, isFunction, isEmpty } from 'lodash';
import { useLocation } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import { ComputerKeyboardNextIcon, SearchIcon } from '@bubbles-ui/icons/outline';
import {
  Avatar,
  Box,
  Logo,
  ImageLoader,
  ActionButton,
  PALETTE,
  getUserFullName
} from '@bubbles-ui/components';
import { SubNav } from '../SubNav'
import { MainNavStyles } from './MainNav.styles';
import { MainNavItem } from './MainNavItem/MainNavItem';
import { getActiveItem } from './helpers/getActiveItem';

export const MAIN_NAV_WIDTH = 52;
export const MAIN_NAV_DEFAULT_PROPS = {
  hideSubNavOnClose: true,
  useRouter: false,
  pinned: false,
  lightMode: false,
  mainColor: PALETTE.mainPrimary,
  drawerColor: PALETTE.neutral90,
  logoUrl: '',
  useSpotlight: false,
  spotlightTooltip: 'Search',
};
export const MAIN_NAV_PROP_TYPES = {
  hideSubNavOnClose: PropTypes.bool,
  useRouter: PropTypes.bool,
  pinned: PropTypes.bool,
  lightMode: PropTypes.bool,
  mainColor: PropTypes.string,
  drawerColor: PropTypes.string,
  logoUrl: PropTypes.string,
  useSpotlight: PropTypes.bool,
  spotlightTooltip: PropTypes.string,
  onPin: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onSearch: PropTypes.func,
  onLogout: PropTypes.func,
  onProfile: PropTypes.func,
  session: PropTypes.any,
  sessionMenu: PropTypes.any,
  isLoading: PropTypes.bool,
  subNavWidth: PropTypes.number,
  menuData: PropTypes.array,
};

const MainNav = ({
  onClose,
  onOpen,
  onPin,
  menuData,
  sessionMenu,
  isLoading,
  subNavWidth,
  pinned,
  useRouter,
  session,
  lightMode,
  mainColor,
  drawerColor,
  logoUrl,
  useSpotlight,
  spotlightTooltip,
}) => {
  const [activeItem, setActiveItem] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);
  const [showSubNav, setShowSubNav] = useState(false);
  const [showSubNavToggle, setShowSubNavToggle] = useState(false);
  const [subNavPinned, setSubNavPinned] = useState(pinned);

  // eslint-disable-next-line no-unused-vars
  const closeSubNav = (_) => {
    // if (hideSubNavOnClose) {
    setShowSubNav(false);
    setShowSubNavToggle(true);
    setSubNavPinned(false);
    // }
    if (isFunction(onClose)) onClose();
  };

  // eslint-disable-next-line no-unused-vars
  const openSubNav = (_) => {
    setShowSubNav(true);
    setShowSubNavToggle(false);
    if (isFunction(onOpen)) onOpen();
  };

  // ······································································
  // HANDLERS

  const handleItemClick = (item) => {
    setActiveItem(item);
    const hasChildren = !item.children || (isArray(item.children) && item.children.length === 0);

    if (item.url && !hasChildren) {
      closeSubNav(false);
    }

    if (isArray(item.children) && item.children.length) {
      setTimeout(() => openSubNav(true), 100);
    } else {
      closeSubNav(true);
    }
  };

  const handleRouteChange = () => {
    let menu = menuData;
    if (sessionMenu) {
      menu = [...menu, sessionMenu];
    }
    const items = getActiveItem(menu);

    if (
      (items && items.activeItem && !activeItem) ||
      (items && items.activeItem && activeItem && items.activeItem.id !== activeItem.id)
    ) {
      if (subNavPinned) {
        handleItemClick(items.activeItem);
      } else {
        setActiveItem(items.activeItem);
      }
    }

    if (
      (items?.activeSubItem && !activeSubItem) ||
      (items?.activeSubItem && activeSubItem && items.activeSubItem.id !== activeSubItem.id)
    ) {
      setActiveSubItem(items.activeSubItem);
      if (!subNavPinned) {
        setShowSubNavToggle(true);
      }
    }
  };

  const ref = useClickOutside(() => {
    if (!subNavPinned) closeSubNav(true);
    handleRouteChange();
  });

  const handleOnPin = () => {
    setSubNavPinned(!subNavPinned);
    if (isFunction(onPin)) onPin(!subNavPinned);
  };

  const handleOnItemClick = (item) => {
    setActiveSubItem(item);
    if (!subNavPinned) {
      closeSubNav();
    }
  };

  function onAvatarClick() {
    if (sessionMenu) {
      handleItemClick(sessionMenu);
    }
  }

  // ······································································
  // WATCHERS

  useEffect(() => {
    if (isLoading || !menuData || (isArray(menuData) && !menuData.length)) {
      handleRouteChange();
    }
    if (menuData && activeItem) {
      let menu = menuData;
      if (sessionMenu) {
        menu = [...menu, sessionMenu];
      }
      setActiveItem(find(menu, { id: activeItem.id }));
    }
  }, [menuData, sessionMenu, isLoading]);

  try {
    const location = useLocation();

    useEffect(() => {
      if (!isLoading && isArray(menuData) && menuData.length) {
        handleRouteChange();
      }
    }, [location]);
  } catch (e) {
    console.info('No react-router-dom found');
  }

  useEffect(() => {
    if (subNavPinned !== pinned) setSubNavPinned(pinned);
  }, [pinned]);

  // ······································································
  // STYLES

  const { classes } = MainNavStyles(
    { itemWidth: MAIN_NAV_WIDTH, subNavWidth, lightMode, mainColor },
    { name: 'MainNav' },
  );

  return (
    <Box className={classes.root} ref={ref}>
      {/* MainNav */}
      <Box className={classes.navWrapper}>
        <Box className={classes.navContainer}>
          <Box className={classes.logoContainer}>
            {!isEmpty(logoUrl) ? (
              <ImageLoader src={logoUrl} forceImage className={classes.logoUrl} height="auto" />
            ) : (
              <Logo isotype className={classes.logo} />
            )}
          </Box>
          {/* Menu items */}
          <SimpleBar className={classes.navItems}>
            {useSpotlight && (
              <MainNavItem
                key="spotlight"
                item={{ label: spotlightTooltip, icon: <SearchIcon /> }}
                itemWidth={MAIN_NAV_WIDTH}
                onClick={() => openSpotlight()}
                lightMode={lightMode}
                drawerColor={drawerColor}
              />
            )}
            {isArray(menuData) &&
              menuData.map((item) => (
                <MainNavItem
                  key={item.id}
                  item={item}
                  itemWidth={MAIN_NAV_WIDTH}
                  active={activeItem?.id === item.id}
                  onClick={() => handleItemClick(item)}
                  useRouter={useRouter}
                  lightMode={lightMode}
                  drawerColor={drawerColor}
                />
              ))}
          </SimpleBar>
          <Avatar
            mx="auto"
            mb={10}
            radius="xl"
            image={session?.avatar}
            fullName={session ? getUserFullName(session) : undefined}
            onClick={onAvatarClick}
          />
        </Box>
        <Box className={classes.navWrapperBorder} />
      </Box>

      {/* Sub Nav */}
      {activeItem && activeItem.children.length > 0 && (
        <SubNav
          open={showSubNav}
          width={subNavWidth}
          pinned={subNavPinned}
          item={activeItem}
          subItems={activeItem.children}
          customItems={activeItem.customChildren}
          activeItem={activeSubItem}
          onItemClick={handleOnItemClick}
          onClose={closeSubNav}
          onPin={handleOnPin}
          className={classes.subNav}
          useRouter={useRouter}
          lightMode={lightMode}
          drawerColor={drawerColor}
          itemWidth={MAIN_NAV_WIDTH}
        />
      )}

      {/* Open Sub Nav handler */}
      {showSubNavToggle && activeItem && activeItem.children.length > 0 && (
        <Box className={classes.subNavHandler}>
          <ActionButton
            icon={<ComputerKeyboardNextIcon />}
            tooltip="Open"
            variant="solid"
            color={lightMode ? 'positive' : 'negative'}
            style={{
              borderRadius: '0 3px 3px 0',
              backgroundColor: lightMode ? PALETTE.interactive10 : mainColor,
            }}
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
