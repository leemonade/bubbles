import React from 'react';
import PropTypes from 'prop-types';
import { isString, trim } from 'lodash';
import { Drawer as MantineDrawer } from '@mantine/core';
import { ChevronLeftIcon, RemoveIcon } from '@bubbles-ui/icons/outline';
import { ActionButton } from '../../form/ActionButton';
import { Box } from '../../layout/Box';
import { Stack } from '../../layout/Stack';
import { BaseDrawerStyles } from './BaseDrawer.styles';

export const BASE_DRAWER_POSITIONS = ['left', 'right', 'top', 'bottom'];
export const BASE_DRAWERS_SIZES = ['xs', 'sm', 'md', 'lg', 'xl', 'full'];

export const BASE_DRAWER_DEFAULT_PROPS = {
  size: 'md',
  opened: false,
  position: 'right',
  back: '',
  close: true,
  closeOnClickOutside: true,
  closeOnEscape: true,
  lockScroll: true,
  trapFocus: false,
  withOverlay: false,
  overlayOpacity: 0.25,
  empty: false,
  shadow: true,
  overlayColor: '#000000',
};
export const BASE_DRAWER_PROP_TYPES = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  opened: PropTypes.bool,
  onClose: PropTypes.func,
  onBack: PropTypes.func,
  overlayColor: PropTypes.string,
  overlayOpacity: PropTypes.number,
  position: PropTypes.oneOf(BASE_DRAWER_POSITIONS),
  closeOnClickOutside: PropTypes.bool,
  closeOnEscape: PropTypes.bool,
  lockScroll: PropTypes.bool,
  trapFocus: PropTypes.bool,
  withOverlay: PropTypes.bool,
  back: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  close: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  empty: PropTypes.bool,
  shadow: PropTypes.bool,
  modalAriaLabel: PropTypes.string,
  contentPadding: PropTypes.string,
  children: PropTypes.node,
  header: PropTypes.node,
};

const BaseDrawer = ({
  close,
  onClose,
  onBack,
  children,
  back,
  header,
  empty,
  shadow,
  modalAriaLabel,
  contentPadding,
  ...props
}) => {
  const { classes } = BaseDrawerStyles({ empty, shadow, contentPadding }, { name: 'BaseDrawer' });

  const justifyContent =
    (!back || back === '') && (close || close !== '') ? 'flex-end' : 'space-between';

  return (
    <MantineDrawer
      {...props}
      onClose={onClose}
      shadow={false}
      withCloseButton={false}
      classNames={classes}
      aria-label={modalAriaLabel}
    >
      {(close || back) && (
        <Box className={classes.header}>
          <Stack fullWidth justifyContent={justifyContent}>
            {back && back !== '' ? (
              <ActionButton
                icon={<ChevronLeftIcon />}
                label={back}
                onClick={onBack}
                tooltip={back}
              />
            ) : null}

            {header || null}

            {close ? (
              <ActionButton
                icon={<RemoveIcon />}
                onClick={onClose}
                tooltip={isString(close) && trim(close) !== '' ? close : null}
              />
            ) : null}
          </Stack>
        </Box>
      )}
      <Box className={classes.content}>{children}</Box>
    </MantineDrawer>
  );
};

BaseDrawer.defaultProps = BASE_DRAWER_DEFAULT_PROPS;
BaseDrawer.propTypes = BASE_DRAWER_PROP_TYPES;

export { BaseDrawer };
