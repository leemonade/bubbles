import React, { forwardRef } from 'react';
import { CheckIcon } from '@bubbles-ui/icons/solid';
import { isString } from 'lodash';
import { Box } from '../../../layout/Box';
import { Text, TextClamp } from '../../../typography';
import { Avatar } from '../../../informative/Avatar';
import { ImageLoader } from '../../../misc';
import { ItemStyles } from './Item.styles';
import { ITEM_DEFAULT_PROPS, ITEM_PROP_TYPES } from './Item.constants';
import { Divider } from '../../../layout/Divider';

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
      description,
      ...props
    },
    ref,
  ) => {
    const { classes } = ItemStyles({ group, disabled }, { name: 'Item' });

    return (
      <Box className={classes.root} ref={ref} {...props}>
        {group === true ? (
          <Divider label={label} sx={{ width: '100%' }} />
        ) : (
          <>
            {image && <Avatar size="sm" image={image} />}
            {!image && icon && (
              <Box className={classes.iconWrapper}>
                {isString(icon) ? <ImageLoader src={icon} height={16} width={16} /> : icon}
              </Box>
            )}
            <Box>
              <TextClamp lines={1}>
                <Text className={classes.label}>{label}</Text>
              </TextClamp>
              {!!description && (
                <TextClamp lines={1}>
                  <Text className={classes.description}>{description}</Text>
                </TextClamp>
              )}
            </Box>
            {dataSelected && <CheckIcon className={classes.check} />}
          </>
        )}
      </Box>
    );
  },
);

Item.displayName = 'DropdownItem';
Item.defaultProps = ITEM_DEFAULT_PROPS;
Item.propTypes = ITEM_PROP_TYPES;

export { Item };
