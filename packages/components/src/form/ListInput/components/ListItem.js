import React, { useEffect, useState } from 'react';
import { Box } from '@mantine/core';
import { ActionButton } from '../../ActionButton';
import { RemoveIcon, SortDragIcon } from '../../../../../icons/outline';
import { CheckIcon, DeleteBinIcon, EditWriteIcon } from '../../../../../icons/solid';

const ListItem = ({
  provided,
  item,
  removeItem,
  editItem,
  inputRender: InputRender,
  editingKey,
  valueKey,
  stopEdit,
  classes,
  onChange,
}) => {
  const [value, setValue] = useState(item[valueKey]);

  useEffect(() => {
    setValue(item[valueKey]);
  }, [item]);

  let children = (
    <>
      <Box sx={(theme) => ({ marginRight: theme.spacing[4] })}>
        <SortDragIcon className={classes.sortableIcon} />
      </Box>
      <Box sx={() => ({ width: '100%' })}>{item[valueKey]}</Box>
      <ActionButton icon={<EditWriteIcon />} onClick={editItem} />
      <ActionButton icon={<DeleteBinIcon />} onClick={removeItem} />
    </>
  );
  if (editingKey === item.__key) {
    children = (
      <>
        <Box sx={(theme) => ({ marginRight: theme.spacing[4] })}>
          <SortDragIcon className={classes.sortableIcon} />
        </Box>
        <Box sx={(theme) => ({ width: '100%', marginRight: theme.spacing[4] })}>
          <InputRender value={value} onChange={setValue} />
        </Box>
        <ActionButton icon={<CheckIcon />} onClick={() => onChange(value)} />
        <ActionButton
          icon={<RemoveIcon />}
          onClick={() => {
            setValue(item.value);
            stopEdit();
          }}
        />
      </>
    );
  }

  return (
    <Box
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      sx={() => ({ display: 'flex', alignItems: 'center' })}
    >
      {children}
    </Box>
  );
};

export { ListItem };
