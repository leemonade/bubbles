import React from 'react';
import PropTypes from 'prop-types';
import { Drawer as MantineDrawer } from '@mantine/core';
import { DrawerStyles } from './Drawer.styles';
import { ChevLeftIcon, RemoveIcon } from '@bubbles-ui/icons/outline';
import { ActionButton } from '../../form';
import { Stack } from '../../../es/layout/Stack';

export const DRAWER_DEFAULT_PROPS = {
  size: 'md',
  opened: false,
  position: 'right',
  onClose: () => {},
  onBack: () => {},
  noCloseOnClickOutside: false,
  hideCloseButton: false,
  noCloseOnEscape: false,
  showBackButton: false,
  noScrollLock: false,
  noFocusTrap: false,
  noOverlay: false,
  overlayOpacity: 0.75,
};
export const DRAWER_PROP_TYPES = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  opened: PropTypes.bool,
  onClose: PropTypes.func,
  onBack: PropTypes.func,
  overlayColor: PropTypes.string,
  overlayOpacity: PropTypes.number,
  position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  noCloseOnClickOutside: PropTypes.bool,
  hideCloseButton: PropTypes.bool,
  noCloseOnEscape: PropTypes.bool,
  showBackButton: PropTypes.bool,
  noScrollLock: PropTypes.bool,
  noFocusTrap: PropTypes.bool,
  noOverlay: PropTypes.bool,
  closeTooltipText: PropTypes.string,
  backText: PropTypes.string,
};

const Drawer = ({
  hideCloseButton,
  showBackButton,
  onClose,
  onBack,
  children,
  closeTooltipText,
  backText,
  ...props
}) => {
  const { classes, cx } = DrawerStyles({});

  const justifyContent = !showBackButton && !hideCloseButton ? 'right' : 'space-between';

  return (
    <MantineDrawer padding="md" {...props} hideCloseButton>
      <Stack fullWidth justifyContent={justifyContent}>
        {showBackButton ? (
          <ActionButton
            icon={<ChevLeftIcon />}
            color="negative"
            label={backText}
            onClick={onBack}
            tooltip={closeTooltipText}
          />
        ) : null}

        {!hideCloseButton ? (
          <ActionButton
            icon={<RemoveIcon />}
            color="negative"
            onClick={onClose}
            tooltip={closeTooltipText}
          />
        ) : null}
      </Stack>
      {children}
    </MantineDrawer>
  );
};

Drawer.defaultProps = DRAWER_DEFAULT_PROPS;

Drawer.propTypes = DRAWER_PROP_TYPES;

export { Drawer };
