import React, { forwardRef, useEffect, useState } from 'react';
import { RemoveIcon, SortDragIcon } from '@bubbles-ui/icons/outline';
import { CheckIcon, DeleteBinIcon, EditWriteIcon } from '@bubbles-ui/icons/solid';
import { Box, Stack } from '../../../layout';
import { ActionButton } from '../../ActionButton';
import { isFunction } from 'lodash';

const ItemValueRender2 = ({ item }) => {
  return <Box sx={() => ({ width: '100%' })} dangerouslySetInnerHTML={{ __html: item }} />;
};

const ListItem = forwardRef(
  (
    {
      provided,
      item,
      removeItem,
      editItem,
      inputRender: IInputRender,
      itemContainerRender: IItemContainerRender = <Stack alignItems="center" fullWidth />,
      itemValueRender: IItemValueRender = ItemValueRender2,
      editingKey,
      valueKey,
      stopEdit,
      classes,
      onChange,
      readonly,
      errorRequiredMessage,
    },
    ref
  ) => {
    const [value, setValue] = useState(item[valueKey]);
    const [hasError, setHasError] = useState(false);

    const InputRender = isFunction(IInputRender) ? <IInputRender /> : IInputRender;

    const ItemContainerRender = isFunction(IItemContainerRender) ? (
      <IItemContainerRender />
    ) : (
      IItemContainerRender
    );
    const ItemValueRender = isFunction(IItemValueRender) ? <IItemValueRender /> : IItemValueRender;

    function update() {
      if (value) {
        onChange(value);
        if (hasError) setHasError(false);
      } else {
        setHasError(true);
      }
    }

    useEffect(() => {
      setValue(item[valueKey]);
    }, [item]);

    let children = React.cloneElement(ItemContainerRender, {
      children: [
        !readonly ? (
          <Box key={1} sx={(theme) => ({ marginRight: theme.spacing[4] })}>
            <SortDragIcon className={classes.sortableIcon} />
          </Box>
        ) : null,

        React.cloneElement(ItemValueRender, {
          item: item[valueKey],
          key: 2,
        }),
        !readonly ? (
          <Stack key={3}>
            <ActionButton icon={<EditWriteIcon />} disabled={!!editingKey} onClick={editItem} />
            <ActionButton icon={<DeleteBinIcon />} disabled={!!editingKey} onClick={removeItem} />
          </Stack>
        ) : null,
      ],
    });
    if (editingKey === item.__key) {
      children = React.cloneElement(ItemContainerRender, {
        children: [
          <Box sx={(theme) => ({ marginRight: theme.spacing[4] })}>
            <SortDragIcon className={classes.sortableIcon} />
          </Box>,
          <Box sx={(theme) => ({ width: '100%', marginRight: theme.spacing[4] })}>
            {React.cloneElement(InputRender, {
              value,
              onChange: (event) => {
                setValue(event);
                if (event) setHasError(false);
              },
              required: true,
              error: hasError ? errorRequiredMessage : null,
            })}
          </Box>,
          <Stack>
            <ActionButton icon={<CheckIcon />} onClick={update} />
            <ActionButton
              icon={<RemoveIcon />}
              onClick={() => {
                setValue(item.value);
                stopEdit();
              }}
            />
          </Stack>,
        ],
      });
    }

    return (
      <Box
        ref={(e) => {
          provided.innerRef(e);
          if (ref) ref(e);
        }}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        sx={() => ({ display: 'flex' })}
      >
        {children}
      </Box>
    );
  }
);

export { ListItem };
