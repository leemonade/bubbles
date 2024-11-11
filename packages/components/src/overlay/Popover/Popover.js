import React, { forwardRef } from 'react';
import { Popover as MantinePopover } from '@mantine/core';
import { RemoveIcon } from '@bubbles-ui/icons/outline';
import { isFunction } from 'lodash';
import { PopoverStyles } from './Popover.styles';
import { POPOVER_DEFAULT_PROPS, POPOVER_PROP_TYPES } from './Popover.constants';
import { Box } from '../../layout/Box';
import { ActionButton } from '../../form/ActionButton';

const Popover = forwardRef(
  (
    { padded, target, children, withArrow, withCloseButton, onClose, styles, clean, ...props },
    ref,
  ) => {
    const { classes } = PopoverStyles({ padded, clean, styles });

    const onCloseHandler = () => {
      if (isFunction(onClose)) onClose();
    };

    return (
      <MantinePopover
        {...props}
        ref={ref}
        withArrow={withArrow}
        onClose={onClose}
        classNames={classes}
      >
        <MantinePopover.Target>{target}</MantinePopover.Target>
        <MantinePopover.Dropdown>
          {withCloseButton && (
            <Box className={classes.closeButton}>
              <ActionButton size="sm" icon={<RemoveIcon />} onClick={onCloseHandler} />
            </Box>
          )}
          {children}
        </MantinePopover.Dropdown>
      </MantinePopover>
    );
  },
);

Popover.displayName = 'Popover';
Popover.defaultProps = POPOVER_DEFAULT_PROPS;
Popover.propTypes = POPOVER_PROP_TYPES;

export { Popover };
