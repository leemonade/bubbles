import React from 'react';
import { Box } from '../../layout/Box';
import { DrawerPushStyles } from './DrawerPush.styles';
import { DRAWER_PUSH_DEFAULT_PROPS, DRAWER_PUSH_PROP_TYPES } from './DrawerPush.constants';

const DrawerPush = ({
  opened,
  size,
  direction,
  children,
  style,
  className,
  fixed,
  useAria,
  modalAriaLabel,
}) => {
  const { classes, cx } = DrawerPushStyles(
    { opened, size, style, direction },
    { name: 'DrawerPush' },
  );

  return (
    <Box
      className={cx(classes.root, className)}
      aria-modal
      role={useAria ? 'dialog' : undefined}
      aria-label={modalAriaLabel}
    >
      <Box className={cx(classes.childrenWrapper, { [classes.fixed]: fixed })}>{children}</Box>
    </Box>
  );
};

DrawerPush.defaultProps = DRAWER_PUSH_DEFAULT_PROPS;
DrawerPush.propTypes = DRAWER_PUSH_PROP_TYPES;

export { DrawerPush };
