import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import SimpleBar from 'simplebar-react';
import { Box, List } from '@mantine/core';
import { ComputerKeyboardPreviousIcon } from '@bubbles-ui/icons/outline';
import { SubNavStyles } from './SubNav.styles';
import { SubNavItem } from './SubNavItem/SubNavItem';
import { ActionButton } from './../../form';
import { MAIN_NAV_WIDTH } from '../MainNav/MainNav';

export const SUB_NAV_DEFAULT_PROPS = {};
export const SUB_NAV_PROP_TYPES = {};

export const SubNav = ({
  item,
  subItems,
  activeItem,
  customItems,
  onClose,
  onItemClick,
  ...props
}) => {
  const { classes, cx } = SubNavStyles({ itemWidth: MAIN_NAV_WIDTH });

  return item ? (
    <Box className={classes.root}>
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
            tooltip="Close"
          />
        </Box>
      </Box>

      {/* SubNav Items */}
      <SimpleBar className={classes.navBar}>
        <Box component="nav">
          <List classNames={{ root: classes.navList, item: classes.navListItem }}>
            {subItems.map((item) => (
              <List.Item key={item.id}>
                <SubNavItem item={item} active={item.id === activeItem?.id} onClick={onItemClick} />
              </List.Item>
            ))}
          </List>
        </Box>
      </SimpleBar>
    </Box>
  ) : null;
};

SubNav.defaultTypes = SUB_NAV_DEFAULT_PROPS;
SubNav.propTypes = SUB_NAV_PROP_TYPES;
