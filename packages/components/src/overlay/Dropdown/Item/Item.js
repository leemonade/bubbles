import React, { forwardRef } from 'react';
import { ItemStyles } from './Item.styles';
import { ITEM_DEFAULT_PROPS, ITEM_PROP_TYPES } from './Item.constants';
import { Box, Divider } from '../../../layout';
import { Text } from '../../../typography';
import { Avatar } from '../../../informative';
import { CheckIcon } from '@bubbles-ui/icons/solid';
import { isString } from 'lodash';

const Item = forwardRef(
  (
    { icon, image, label, group, value, className, 'data-selected': dataSelected, ...props },
    ref
  ) => {
    const { classes } = ItemStyles({ group }, { name: 'Item' });
    if (group)
      return (
        <Box className={classes.group}>
          {isString(group) ? group : label} <Divider />
        </Box>
      );
    return (
      <Box className={classes.root} ref={ref} {...props}>
        {image && <Avatar size="sm" image={image} />}
        {!image && icon && <Box className={classes.iconWrapper}>{icon}</Box>}
        <Text className={classes.label}>{label}</Text>
        {dataSelected && <CheckIcon className={classes.check} />}
      </Box>
    );
  }
);

Item.defaultProps = ITEM_DEFAULT_PROPS;
Item.propTypes = ITEM_PROP_TYPES;

export { Item };
