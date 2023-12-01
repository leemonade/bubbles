import React from 'react';
import PropTypes from 'prop-types';
import { defaultsDeep, isFunction } from 'lodash';
import { useTable } from 'react-table';
import { useSticky as useStickyPlugin } from 'react-table-sticky';
import update from 'immutability-helper';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { SortDragIcon } from '@bubbles-ui/icons/outline';
import { Text } from '../../typography';
import { Box } from '../../layout/Box';
import { TableCell } from './TableCell/TableCell';
import { TableStyles } from './Table.styles';

export const TABLE_DEFAULT_PROPS = {
  columns: [],
  data: [],
  useAria: true,
  headerStyles: {},
  sortable: false,
};
export const TABLE_PROP_TYPES = {
  columns: PropTypes.arrayOf(PropTypes.any),
  data: PropTypes.arrayOf(PropTypes.any),
  onChangeData: PropTypes.func,
  useAria: PropTypes.bool,
  headerStyles: PropTypes.object,
  sortable: PropTypes.bool,
  useSticky: PropTypes.bool,
  styleTable: PropTypes.object,
  renderRowSubComponent: PropTypes.func,
  onStyleRow: PropTypes.func,
  onClickRow: PropTypes.func,
  rowsExpanded: PropTypes.arrayOf(PropTypes.any),
  styleRow: PropTypes.object,
};

const Table = ({
  columns,
  data,
  styleRow,
  onStyleRow = () => {},
  onClickRow = () => {},
  onChangeData,
  useAria,
  rowsExpanded,
  renderRowSubComponent,
  headerStyles,
  sortable,
  useSticky,
  styleTable,
}) => {
  const plugins = [];
  if (useSticky) {
    plugins.push(useStickyPlugin);
  }
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, visibleColumns } =
    useTable(
      {
        columns,
        data,
      },
      ...plugins,
    );

  const onChangeCell = (oldCell, newCell) => {
    const newData = update(data, {
      [oldCell.row.index]: { [oldCell.column.id]: { $merge: newCell.value } },
    });

    if (isFunction(onChangeData)) {
      onChangeData({
        changedField: oldCell.column.id,
        oldData: data,
        newData,
        oldItem: oldCell.value,
        newItem: newCell.value,
        itemIndex: oldCell.row.index,
      });
    }
  };

  const onDragEnd = ({ source, destination }) => {
    if (!destination) return;

    const from = source.index;
    const to = destination.index;
    const record = data[from];
    const newData = update(data, {
      $splice: [
        [from, 1],
        [to, 0, record],
      ],
    });

    onChangeData({ newData });
  };

  const { theme, classes, cx } = TableStyles({ headerStyles }, { name: 'Table' });

  // Render the UI for your table
  return (
    <table
      {...getTableProps({
        className: classes.root,
      })}
      style={styleTable}
      role={useAria ? 'table' : undefined}
    >
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr
            key={`hg-${i}`}
            {...headerGroup.getHeaderGroupProps({
              className: cx(classes.tr, classes.trHeader),
            })}
          >
            {!!sortable && <th style={{ width: 20 }} />}
            {headerGroup.headers.map((column, j) => (
              <th
                key={`hgh-${j}`}
                {...column.getHeaderProps({
                  className: cx(classes.th, column.className),
                  style: column.style,
                })}
              >
                <Text size="xs" role="productive" color="primary" strong>
                  {column.render('Header')}
                </Text>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="table-droppable">
          {(droppableProvided) => (
            <tbody
              {...getTableBodyProps()}
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <Draggable
                    draggableId={row?.original?.id || `row-draggable-${i}`}
                    key={row?.original?.id || `row-draggable-${i}`}
                    index={row.index}
                    isDragDisabled={!sortable}
                  >
                    {(draggableProvided, snapshot) => (
                      <>
                        <tr
                          {...row.getRowProps({
                            className: cx({ [classes.tr]: i < rows.length - 1 }),
                          })}
                          onClick={() => onClickRow(row)}
                          {...draggableProvided.draggableProps}
                          {...draggableProvided.dragHandleProps}
                          style={defaultsDeep(
                            draggableProvided.draggableProps.style,
                            defaultsDeep(styleRow, onStyleRow({ row, theme })),
                          )}
                          ref={draggableProvided.innerRef}
                        >
                          {!!sortable && (
                            <td>
                              <Box
                                className={classes.sortIcon}
                                style={{ paddingLeft: snapshot.isDragging ? 10 : 0 }}
                              >
                                <SortDragIcon />
                              </Box>
                            </td>
                          )}
                          {row.cells.map((cell, k) => (
                            <td
                              key={`rc-${k}`}
                              {...cell.getCellProps({
                                className: classes.td,
                                style: cell.column.tdStyle,
                              })}
                            >
                              <TableCell
                                cell={cell}
                                onChangeCell={onChangeCell}
                                useAria={useAria}
                              />
                            </td>
                          ))}
                        </tr>
                        {rowsExpanded?.includes(row.id) ? (
                          <tr>
                            <td colSpan={visibleColumns.length}>
                              {renderRowSubComponent({ row })}
                            </td>
                          </tr>
                        ) : null}
                      </>
                    )}
                  </Draggable>
                );
              })}
              {droppableProvided.placeholder}
            </tbody>
          )}
        </Droppable>
      </DragDropContext>
    </table>
  );
};

Table.defaultProps = TABLE_DEFAULT_PROPS;
Table.propTypes = TABLE_PROP_TYPES;

export { Table };
