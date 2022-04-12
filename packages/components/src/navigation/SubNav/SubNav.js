import React, { forwardRef } from 'react';
import SimpleBar from 'simplebar-react';
import { isNil } from 'lodash';
import { List } from '@mantine/core';
import { ComputerKeyboardPreviousIcon, PluginKimIcon } from '@bubbles-ui/icons/outline';
import { Box, Stack } from '../../layout';
import { ActionButton } from './../../form';
import { MAIN_NAV_WIDTH } from '../MainNav/MainNav';
import { SubNavItem } from './SubNavItem/SubNavItem';
import { SubNavStyles } from './SubNav.styles';

export const SUB_NAV_DEFAULT_PROPS = {
  useRouter: false,
  open: false,
  pinned: false,
  messages: {
    closeTooltip: 'Close',
  },
};
export const SUB_NAV_PROP_TYPES = {};

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
      customItems,
      onClose,
      onPin,
      onItemClick,
      className,
      useRouter,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const { classes, cx } = SubNavStyles(
      { itemWidth: MAIN_NAV_WIDTH, width, pinned },
      { name: 'SubNav' }
    );

    return !isNil(item) ? (
      <Box
        ref={ref}
        style={style}
        className={cx(classes.root, className, { [classes.open]: open })}
      >
        {/* Header */}
        <Box className={classes.navHeader}>
          <Box className={classes.navHeaderLabel}>{item.label}</Box>

          {/* Close button */}
          <Stack className={classes.navHeaderAction}>
            <ActionButton
              icon={<ComputerKeyboardPreviousIcon />}
              rounded
              color="negative"
              onClick={onClose}
              tooltip={messages?.closeTooltip || null}
            />
            <ActionButton
              icon={<PluginKimIcon />}
              rounded
              color="negative"
              active={pinned}
              onClick={onPin}
              tooltip={messages?.pinTooltip || null}
            />
          </Stack>
        </Box>

        {/* SubNav Items */}
        <SimpleBar className={classes.navBar}>
          <Box component="nav">
            <List classNames={{ root: classes.navList, item: classes.navListItem }}>
              {subItems.map((subItem) => (
                <List.Item key={subItem.id}>
                  <SubNavItem
                    item={subItem}
                    active={subItem.id === activeItem?.id}
                    onClick={onItemClick}
                    useRouter={useRouter}
                  />
                </List.Item>
              ))}
            </List>
            {children ? children : null}
          </Box>
        </SimpleBar>
      </Box>
    ) : null;
  }
);

SubNav.defaultTypes = SUB_NAV_DEFAULT_PROPS;
SubNav.propTypes = SUB_NAV_PROP_TYPES;
