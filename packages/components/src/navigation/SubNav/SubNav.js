import React from 'react';
import SimpleBar from 'simplebar-react';
import { isNil } from 'lodash';
import { Box, List } from '@mantine/core';
import { ComputerKeyboardPreviousIcon } from '@bubbles-ui/icons/outline';
import { SubNavStyles } from './SubNav.styles';
import { SubNavItem } from './SubNavItem/SubNavItem';
import { ActionButton } from './../../form';
import { MAIN_NAV_WIDTH } from '../MainNav/MainNav';

export const SUB_NAV_DEFAULT_PROPS = {
  useRouter: false,
  messages: {
    closeTooltip: 'Close',
  },
};
export const SUB_NAV_PROP_TYPES = {};

export const SubNav = ({
  messages,
  item,
  subItems,
  activeItem,
  customItems,
  onClose,
  onItemClick,
  className,
  useRouter,
  children,
  ...props
}) => {
  const { classes, cx } = SubNavStyles({ itemWidth: MAIN_NAV_WIDTH }, { name: 'SubNav' });

  return !isNil(item) ? (
    <Box className={cx(classes.root, className)}>
      {/* Header */}
      <Box className={classes.navHeader}>
        <Box className={classes.navHeaderLabel}>{item.label}</Box>

        {/* Close button */}
        <Box className={classes.navHeaderAction}>
          <ActionButton
            icon={<ComputerKeyboardPreviousIcon />}
            rounded
            color="negative"
            onClick={onClose}
            tooltip={messages?.closeTooltip || null}
          />
        </Box>
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
};

SubNav.defaultTypes = SUB_NAV_DEFAULT_PROPS;
SubNav.propTypes = SUB_NAV_PROP_TYPES;
