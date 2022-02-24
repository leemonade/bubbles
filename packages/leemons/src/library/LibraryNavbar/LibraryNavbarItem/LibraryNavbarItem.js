import React, { useCallback } from 'react';
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

  const { classes, cx } = LibraryNavbarItemStyles(
    { selected, disabled },
    { name: 'LibraryNavbarItem' }
  );

  const renderIcon = useCallback(() => {
    if (!icon) return;
    if (typeof icon === 'string') {
      return <ImageLoader className={classes.icon} src={icon} fillCurrent />;
    }
    return icon;
  }, [icon, classes]);

  return (
    <Box className={classes.root} onClick={onClickHandler}>
      <Box className={classes.iconWrapper}>{renderIcon()}</Box>
      <Text className={classes.label}>{label}</Text>
    </Box>
  );
};

LibraryNavbarItem.defaultProps = LIBRARY_NAVBAR_ITEM_DEFAULT_PROPS;
LibraryNavbarItem.propTypes = LIBRARY_NAVBAR_ITEM_PROP_TYPES;

export { LibraryNavbarItem };
