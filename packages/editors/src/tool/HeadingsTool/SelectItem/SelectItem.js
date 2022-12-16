import React, { forwardRef } from 'react';
import { Box, Title, Text } from '@bubbles-ui/components';
import { CheckIcon } from '@bubbles-ui/icons/solid';
import { SelectItemStyles } from './SelectItem.styles';
import { SELECT_ITEM_DEFAULT_PROPS, SELECT_ITEM_PROP_TYPES } from './SelectItem.constants';

const SelectItem = forwardRef(
  (
    { icon, image, label, group, value, className, 'data-selected': dataSelected, ...props },
    ref
  ) => {
    const { classes } = SelectItemStyles({ group }, { name: 'SelectItem' });
    return (
      <Box className={classes.root} ref={ref} {...props}>
        <Box className={classes.label}>
          {Number(value) === 0 ? (
            <Text role="productive" color="primary">
              {label}
            </Text>
          ) : (
            <Title order={Number(value)}>{label}</Title>
          )}
        </Box>
        {dataSelected && <CheckIcon className={classes.check} />}
      </Box>
    );
  }
);

SelectItem.defaultProps = SELECT_ITEM_DEFAULT_PROPS;
SelectItem.propTypes = SELECT_ITEM_PROP_TYPES;

export { SelectItem };
