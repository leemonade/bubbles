import React from 'react';
import { Box } from '../../layout';
import { DrawerPushStyles } from './DrawerPush.styles';
import { DRAWER_PUSH_DEFAULT_PROPS, DRAWER_PUSH_PROP_TYPES } from './DrawerPush.constants';

const DrawerPush = ({ opened, size, direction, children, style, className, ...props }) => {
  const { classes, cx } = DrawerPushStyles(
    { opened, size, style, direction },
    { name: 'DrawerPush' }
  );

  return (
    <Box className={cx(classes.root, className)}>
      <Box className={classes.childrenWrapper}>{children}</Box>
    </Box>
  );
};

DrawerPush.defaultProps = DRAWER_PUSH_DEFAULT_PROPS;
DrawerPush.propTypes = DRAWER_PUSH_PROP_TYPES;

export { DrawerPush };
