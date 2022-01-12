import React from 'react';
import PropTypes from 'prop-types';
import { isString, trim } from 'lodash';
import { Box, Drawer as MantineDrawer } from '@mantine/core';
import { DrawerStyles } from './Drawer.styles';
import { ChevronLeftIcon, RemoveIcon } from '@bubbles-ui/icons/outline';
import { ActionButton } from '../../form';
import { Stack } from '../../layout';

export const DRAWER_POSITIONS = ['left', 'right', 'top', 'bottom'];

export const DRAWER_DEFAULT_PROPS = {
  size: 'md',
  opened: false,
  position: 'right',
  back: '',
  close: true,
  noCloseOnClickOutside: false,
  noCloseOnEscape: false,
  noScrollLock: false,
  noFocusTrap: true,
  noOverlay: false,
  overlayOpacity: 0.75,
  empty: false,
};
export const DRAWER_PROP_TYPES = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  opened: PropTypes.bool,
  onClose: PropTypes.func,
  onBack: PropTypes.func,
  overlayColor: PropTypes.string,
  overlayOpacity: PropTypes.number,
  position: PropTypes.oneOf(DRAWER_POSITIONS),
  noCloseOnClickOutside: PropTypes.bool,
  noCloseOnEscape: PropTypes.bool,
  noScrollLock: PropTypes.bool,
  noFocusTrap: PropTypes.bool,
  noOverlay: PropTypes.bool,
  back: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  close: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  empty: PropTypes.bool,
};

const Drawer = ({ close, onClose, onBack, children, back, empty, shadow, ...props }) => {
  const { classes, cx } = DrawerStyles({ empty });

  const justifyContent =
    (!back || back === '') && (close || close !== '') ? 'flex-end' : 'space-between';

  return (
    <MantineDrawer {...props} shadow={false} hideCloseButton classNames={classes}>
      <Box className={classes.header}>
        <Stack fullWidth justifyContent={justifyContent}>
          {back && back !== '' ? (
            <ActionButton icon={<ChevronLeftIcon />} label={back} onClick={onBack} tooltip={back} />
          ) : null}

          {close ? (
            <ActionButton
              icon={<RemoveIcon />}
              onClick={onClose}
              tooltip={isString(close) && trim(close) !== '' ? close : null}
            />
          ) : null}
        </Stack>
      </Box>
      <Box className={classes.content}>{children}</Box>
    </MantineDrawer>
  );
};

Drawer.defaultProps = DRAWER_DEFAULT_PROPS;
Drawer.propTypes = DRAWER_PROP_TYPES;

export { Drawer };
