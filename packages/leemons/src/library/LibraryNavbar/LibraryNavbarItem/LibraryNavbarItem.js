import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@bubbles-ui/components';
import { LibraryNavbarItemStyles } from './LibraryNavbarItem.styles';

export const LIBRARY_NAVBAR_ITEM_DEFAULT_PROPS = {
  selected: false,
  disabled: false,
};
export const LIBRARY_NAVBAR_ITEM_PROP_TYPES = {
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
};

const LibraryNavbarItem = ({ icon, label, selected, disabled, ...props }) => {
  const { classes, cx } = LibraryNavbarItemStyles(
    { selected, disabled },
    { name: 'LibraryNavbarItem' }
  );
  return (
    <Box className={classes.root}>
      <Box>{icon && icon}</Box>
      <Text className={classes.label}>{label}</Text>
    </Box>
  );
};

LibraryNavbarItem.defaultProps = LIBRARY_NAVBAR_ITEM_DEFAULT_PROPS;
LibraryNavbarItem.propTypes = LIBRARY_NAVBAR_ITEM_PROP_TYPES;

export { LibraryNavbarItem };
