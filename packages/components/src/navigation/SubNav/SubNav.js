import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import SimpleBar from 'simplebar-react';
import { isNil } from 'lodash';
import { List } from '@mantine/core';
import { ComputerKeyboardPreviousIcon, PluginKimIcon } from '@bubbles-ui/icons/outline';
import { Box } from '../../layout/Box';
import { Stack } from '../../layout/Stack';
import { ActionButton } from '../../form/ActionButton';
import { SubNavItem } from './SubNavItem/SubNavItem';
import { SubNavStyles } from './SubNav.styles';
import { PALETTE } from '../../theme.constants';

export const SUB_NAV_DEFAULT_PROPS = {
  useRouter: false,
  open: false,
  pinned: false,
  messages: {
    closeTooltip: 'Close',
  },
  lightMode: false,
  drawerColor: PALETTE.neutral90,
};
export const SUB_NAV_PROP_TYPES = {
  useRouter: PropTypes.bool,
  open: PropTypes.bool,
  pinned: PropTypes.bool,
  messages: PropTypes.any,
  lightMode: PropTypes.bool,
  drawerColor: PropTypes.string,
  width: PropTypes.number,
  item: PropTypes.object,
  subItems: PropTypes.array,
  activeItem: PropTypes.object,
  onClose: PropTypes.func,
  onPin: PropTypes.func,
  onItemClick: PropTypes.func,
  children: PropTypes.node,
  hideHeaderActions: PropTypes.bool,
  style: PropTypes.any,
  className: PropTypes.string,
  itemWidth: PropTypes.number,
};

export const SubNav = forwardRef(
  (
    {
      open,
      pinned,
      width,
      messages,
      item,
      subItems,
      activeItem,
      onClose,
      onPin,
      onItemClick,
      className,
      useRouter,
      children,
      hideHeaderActions,
      style,
      lightMode,
      drawerColor,
      itemWidth,
    },
    ref,
  ) => {
    const { classes, cx } = SubNavStyles(
      { itemWidth, width, pinned, lightMode, drawerColor },
      { name: 'SubNav' },
    );

    return !isNil(item) ? (
      <Box
        ref={ref}
        style={style}
        className={cx(classes.root, className, { [classes.open]: open })}
      >
        {/* Header */}
        <Box className={classes.navHeader}>
          {/* Close button */}
          {!hideHeaderActions ? (
            <Stack className={classes.navHeaderAction} justifyContent="end">
              <ActionButton
                icon={<PluginKimIcon />}
                rounded
                color={!lightMode && 'negative'}
                active={pinned}
                onClick={onPin}
                tooltip={messages?.pinTooltip || null}
              />
              <ActionButton
                icon={<ComputerKeyboardPreviousIcon />}
                rounded
                color={!lightMode && 'negative'}
                onClick={onClose}
                tooltip={messages?.closeTooltip || null}
              />
            </Stack>
          ) : null}

          <Box className={classes.navHeaderLabel}>{item.label}</Box>
        </Box>

        {/* SubNav Items */}
        <SimpleBar className={classes.navBar}>
          <Box component="nav">
            <List
              classNames={{
                root: classes.navList,
                item: classes.navListItem,
                itemWrapper: classes.itemWrapper,
              }}
            >
              {subItems.map((subItem) => (
                <List.Item key={subItem.id}>
                  <SubNavItem
                    item={subItem}
                    active={subItem.id === activeItem?.id}
                    onClick={onItemClick}
                    useRouter={useRouter}
                    lightMode={lightMode}
                  />
                </List.Item>
              ))}
            </List>
            {children || null}
          </Box>
        </SimpleBar>
      </Box>
    ) : null;
  },
);

SubNav.displayName = 'SubNav';
SubNav.defaultTypes = SUB_NAV_DEFAULT_PROPS;
SubNav.propTypes = SUB_NAV_PROP_TYPES;
