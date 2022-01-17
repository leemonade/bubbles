import React, { useCallback, useRef, useEffect } from 'react';
import { Box } from '@mantine/core';
import { DeleteBinIcon } from '@bubbles-ui/icons/solid';
import { SortDragIcon } from '@bubbles-ui/icons/outline';
import { useDrag, useDrop } from 'react-dnd';
import { TableCell } from '../../informative/Table/TableCell/TableCell';
import { ActionButton } from '../../form';

const DND_ITEM_TYPE = 'bubbles-table-input-row';

const TableInputRow = ({
  labels,
  row,
  index,
  moveRow,
  onRemove,
  classes,
  tableClasses,
  cx,
  totalRows,
  sortable,
}) => {
  const dropRef = useRef(null);
  const dragRef = useRef(null);

  const [, drop] = useDrop({
    accept: DND_ITEM_TYPE,
    hover(item, monitor) {
      if (!dropRef.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = dropRef.current.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveRow(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: DND_ITEM_TYPE,
    item: () => {
      return { index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  preview(drop(dropRef));

  useEffect(() => {
    drag(dragRef);
  }, [sortable]);

  const getColumCellValue = useCallback((cell) => {
    return <TableCell cell={cell} />;
  }, []);

  return (
    <tr
      {...row.getRowProps({
        className: cx(classes.row, { [tableClasses.tr]: index < totalRows - 1 }),
      })}
      ref={dropRef}
      style={{ opacity }}
    >
      {sortable && (
        <td ref={dragRef}>
          <Box className={classes.sortIcon}>
            <SortDragIcon />
          </Box>
        </td>
      )}
      {row.cells.map((cell) => (
        <td
          {...cell.getCellProps({
            className: tableClasses.td,
          })}
        >
          {getColumCellValue(cell)}
        </td>
      ))}
      <td className={cx(tableClasses.td, classes.actionCell)}>
        <ActionButton
          icon={<DeleteBinIcon />}
          tooltip={labels.remove}
          onClick={() => onRemove(index)}
        />
      </td>
    </tr>
  );
};

export { TableInputRow };
