import React from 'react';
import { isFunction, isObject, isString } from 'lodash';
import { Box, Checkbox } from '@mantine/core';
import { Stack } from '../../../layout';
import { Text } from '../../../typography';
import { TableCellStyles } from './TableCell.styles';

export const TableCell = ({ cell, onChangeCell }) => {
  const onCheckedChange = (event) => {
    onChangeCell(cell, { ...cell, value: { ...cell.value, checked: event.target.checked } });
  };

  const { classes, cx } = TableCellStyles(
    { active: cell.value.checked || cell.value.active },
    { name: 'TableCell' }
  );

  // Custom
  if (isFunction(cell.value)) {
    return cell.value();
  }
  if (isObject(cell.value)) {
    // Checkbox
    if (cell.value.type === 'checkbox') {
      return (
        <Stack className={classes.root} justifyContent="center" alignItems="center">
          <Checkbox checked={cell.value.checked} onChange={onCheckedChange} />
        </Stack>
      );
    }
  }
  // Default
  return <Box className={classes.root}>{cell.render('Cell')}</Box>;
};
