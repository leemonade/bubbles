import React, { forwardRef } from 'react';
import { Popover as MantinePopover } from '@mantine/core';
import { PopoverStyles } from './Popover.styles';
import { POPOVER_DEFAULT_PROPS, POPOVER_PROP_TYPES } from './Popover.constants';
import { Box } from '../../layout';
import { ActionButton } from '../../form';
import { RemoveIcon } from '@bubbles-ui/icons/outline';
import { isFunction } from 'lodash';

const Popover = forwardRef(
  ({ padded, target, children, withCloseButton, onClose, styles, ...props }, ref) => {
    const { classes } = PopoverStyles({ padded, styles });

    const onCloseHandler = () => {
      isFunction(onClose) && onClose();
    };

    return (
      <MantinePopover {...props} ref={ref} onClose={onClose} classNames={classes}>
        <MantinePopover.Target>{target}</MantinePopover.Target>
        <MantinePopover.Dropdown>
          {withCloseButton && (
            <Box className={classes.closeButton}>
              <ActionButton size="xs" icon={<RemoveIcon />} onClick={onCloseHandler} />
            </Box>
          )}
          {children}
        </MantinePopover.Dropdown>
      </MantinePopover>
    );
  }
);

Popover.defaultProps = POPOVER_DEFAULT_PROPS;
Popover.propTypes = POPOVER_PROP_TYPES;

export { Popover };
