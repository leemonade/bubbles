import React, { useEffect, useMemo, useState } from 'react';
import { isFunction } from 'lodash';
import { Box } from '../../layout/Box';
import { Text } from '../../typography';
import { AvatarsGroup } from '../AvatarsGroup';
import { UserDisplayItem } from '../UserDisplayItem';
import { UserDisplayItemListStyles } from './UserDisplayItemList.styles';
import {
  USER_DISPLAY_ITEM_LIST_DEFAULT_PROPS,
  USER_DISPLAY_ITEM_LIST_PROP_TYPES,
} from './UserDisplayItemList.constants';

const UserDisplayItemList = ({
  data,
  limit,
  labels,
  expanded,
  onChange,
  onExpand,
  onShrink,
  notExpandable,
  useAria,
}) => {
  const [isOpen, setIsOpen] = useState(expanded);
  const visibleData = useMemo(() => {
    if (isOpen && !notExpandable) return data;
    return data.slice(0, limit);
  }, [data, limit, isOpen]);
  const hiddenData = useMemo(() => {
    if (isOpen && !notExpandable) return [];
    return data
      .slice(limit)
      .map(({ name, surnames, avatar }) => ({ fullName: `${name} ${surnames}`, avatar }));
  }, [data, limit, isOpen]);

  const allVisible = limit >= data.length;

  const expandList = () => {
    if (isFunction(onExpand)) onExpand();
    setIsOpen(true);
    if (isFunction(onChange)) onChange(true);
  };

  const shrinkList = () => {
    if (isFunction(onShrink)) onShrink();
    setIsOpen(false);
    if (isFunction(onChange)) onChange(false);
  };

  useEffect(() => {
    if (expanded !== isOpen) {
      setIsOpen(expanded);
      if (isFunction(onChange)) onChange(expanded);
    }
  }, [expanded]);

  const { classes } = UserDisplayItemListStyles({}, { name: 'UserDisplayItemList' });
  return (
    <Box className={classes.root}>
      <Box className={classes.userList} role={useAria ? 'list' : undefined}>
        {visibleData.map((user, index) => (
          <UserDisplayItem
            key={index}
            {...user}
            size="xs"
            textRole="productive"
            role={useAria ? 'listitem' : undefined}
          />
        ))}
      </Box>
      <Box className={classes.hiddenData}>
        {hiddenData.length > 0 && <AvatarsGroup data={hiddenData} size="xs" />}
        {!allVisible && !isOpen && (
          <Text
            onClick={expandList}
            role="productive"
            size="xs"
          >{`(${hiddenData.length}) ${labels.showMore}`}</Text>
        )}
        {!allVisible && isOpen && (
          <Text onClick={shrinkList} role="productive" size="xs">
            {labels.showLess}
          </Text>
        )}
      </Box>
    </Box>
  );
};

UserDisplayItemList.defaultProps = USER_DISPLAY_ITEM_LIST_DEFAULT_PROPS;
UserDisplayItemList.propTypes = USER_DISPLAY_ITEM_LIST_PROP_TYPES;

export { UserDisplayItemList };
