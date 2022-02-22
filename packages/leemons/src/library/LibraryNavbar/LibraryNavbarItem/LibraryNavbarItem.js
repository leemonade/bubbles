import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, ImageLoader } from '@bubbles-ui/components';
import { LibraryNavbarItemStyles } from './LibraryNavbarItem.styles';
import { isFunction } from 'lodash';

export const LIBRARY_NAVBAR_ITEM_DEFAULT_PROPS = {
  selected: false,
  disabled: false,
};
export const LIBRARY_NAVBAR_ITEM_PROP_TYPES = {
  icon: PropTypes.oneOfType(PropTypes.node, PropTypes.string),
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

const LibraryNavbarItem = ({ icon, label, selected, disabled, onClick, ...props }) => {
  const onClickHandler = (e) => {
    if (disabled) return;
    isFunction(onClick) && onClick(e);
  };

  const renderIcon = () => {
    if (!icon) return;
    if (typeof icon === 'string') {
      return <ImageLoader src={icon} forceImage height={16} width={16} />;
    }
    return icon;
  };

  const { classes, cx } = LibraryNavbarItemStyles(
    { selected, disabled },
    { name: 'LibraryNavbarItem' }
  );
  return (
    <Box className={classes.root} onClick={onClickHandler}>
      <Box>{renderIcon()}</Box>
      <Text className={classes.label}>{label}</Text>
    </Box>
  );
};

LibraryNavbarItem.defaultProps = LIBRARY_NAVBAR_ITEM_DEFAULT_PROPS;
LibraryNavbarItem.propTypes = LIBRARY_NAVBAR_ITEM_PROP_TYPES;

export { LibraryNavbarItem };
