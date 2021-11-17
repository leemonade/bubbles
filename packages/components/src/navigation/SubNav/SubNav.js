import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { Link, useHistory } from 'react-router-dom';
import { useDrop } from 'react-dnd';
import { ChevronLeftIcon } from '@heroicons/react/outline';
import { SubNavStyles } from './SubNav.styles';
import { SubNavItem } from './SubNavItem/SubNavItem';
import { DndSortItem, DndDropZone, registerDndLayer } from './dnd';
import { IconButton } from './../../form';

const MAINNAV_WIDTH = 52;

export const SubNav = ({ children, item, onClose, activeItem, state, setState, ...props }) => {
  const { classes, cx } = SubNavStyles({ itemWidth: MAINNAV_WIDTH });

  return item ? (
    <Box className={classes.root}>
      {/* Header */}
      <Box className={classes.navHeader}>
        <Box className={classes.navHeaderLabel}>{item.label}</Box>
        {/* Close button */}
        <Box className={classes.navHeaderAction}>
          <IconButton
            size='xs'
            color='negative'
            icon={<ChevronLeftIcon height='14' />}
            onClick={onClose}
          />
        </Box>
      </Box>
    </Box>
  ) : null;
};

SubNav.propTypes = {};
