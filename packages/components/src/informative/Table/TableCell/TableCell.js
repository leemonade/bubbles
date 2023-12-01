import React from 'react';
import PropTypes from 'prop-types';
import { isFunction, isObject } from 'lodash';
import { Box } from '../../../layout/Box';
import { Stack } from '../../../layout/Stack';
import { Checkbox } from '../../../form/Checkbox';
import { TableCellStyles } from './TableCell.styles';

// eslint-disable-next-line import/prefer-default-export
export const TableCell = ({ cell, form, onChangeCell, useAria }) => {
  const onCheckedChange = (val) => {
    onChangeCell(cell, { ...cell, value: { ...cell.value, checked: val } });
  };

  const { classes } = TableCellStyles(
    { active: cell.value?.checked || cell.value?.active },
    { name: 'TableCell' },
  );

  // Custom
  if (isFunction(cell.value)) {
    return cell.value();
  }

  if (isFunction(cell.column.valueRender)) {
    return (
      <Box
        className={classes.root}
        style={cell.column.cellStyle}
        role={useAria ? 'cell' : undefined}
      >
        {cell.column.valueRender(cell.value, cell.row.original, form)}
      </Box>
    );
  }

  if (isObject(cell.value) && cell.value.type === 'checkbox') {
    return (
      <Stack
        className={classes.root}
        justifyContent="center"
        alignItems="center"
        role={useAria ? 'cell' : undefined}
      >
        <Checkbox
          checked={cell.value?.checked}
          onChange={onCheckedChange}
          aria-label={`${cell.column.id} ${cell.row.id}`}
          useAria={useAria}
        />
      </Stack>
    );
  }

  // Default
  return (
    <Box className={classes.root} style={cell.column.cellStyle} role={useAria ? 'cell' : undefined}>
      {cell.render('Cell')}
    </Box>
  );
};

TableCell.propTypes = {
  cell: PropTypes.any,
  form: PropTypes.any,
  onChangeCell: PropTypes.func,
  useAria: PropTypes.bool,
};
