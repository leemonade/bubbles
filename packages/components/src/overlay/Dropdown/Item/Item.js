import React, { forwardRef } from 'react';
import { CheckIcon } from '@bubbles-ui/icons/solid';
import { isString } from 'lodash';
import { Box } from '../../../layout/Box';
import { Text } from '../../../typography';
import { Avatar } from '../../../informative/Avatar';
import { ImageLoader } from '../../../misc';
import { ItemStyles } from './Item.styles';
import { ITEM_DEFAULT_PROPS, ITEM_PROP_TYPES } from './Item.constants';

const Item = forwardRef(
  (
    {
      icon,
      image,
      label,
      group,
      value,
      disabled,
      className,
      'data-selected': dataSelected,
      ...props
    },
    ref,
  ) => {
    const { classes } = ItemStyles({ group, disabled }, { name: 'Item' });

    return (
      <Box className={classes.root} ref={ref} {...props}>
        {image && <Avatar size="sm" image={image} />}
        {!image && icon && (
          <Box className={classes.iconWrapper}>
            {isString(icon) ? <ImageLoader src={icon} height={16} width={16} /> : icon}
          </Box>
        )}
        <Text className={classes.label}>{label}</Text>
        {dataSelected && <CheckIcon className={classes.check} />}
      </Box>
    );
  },
);

Item.displayName = 'DropdownItem';
Item.defaultProps = ITEM_DEFAULT_PROPS;
Item.propTypes = ITEM_PROP_TYPES;

export { Item };
