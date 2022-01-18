import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import { isFunction } from 'lodash';
import { TABLE_PROP_TYPES, TABLE_DEFAULT_PROPS } from '../../informative/Table';
import { TableInputDisplay } from './TableInputDisplay';

export const TABLE_INPUT_DEFAULT_PROPS = {
  ...TABLE_DEFAULT_PROPS,
  sortable: true,
};
export const TABLE_INPUT_PROP_TYPES = {
  ...TABLE_PROP_TYPES,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string,
      accessor: PropTypes.string,
      input: PropTypes.shape({
        node: PropTypes.element,
        rules: PropTypes.object,
      }),
    })
  ),
  labels: PropTypes.shape({
    add: PropTypes.string,
    remove: PropTypes.string,
  }),
  sortable: PropTypes.bool,
};

const TableInput = ({ data, onChangeData, ...props }) => {
  const [tableData, setTableData] = useState(data);

  const handleOnAdd = (item) => {
    const newData = update(tableData, { $push: [item] });
    setTableData(newData);
    if (isFunction(onChangeData)) onChangeData(newData);
  };

  const handleOnRemove = (index) => {
    const newData = update(tableData, { $splice: [[index, 1]] });
    setTableData(newData);
    if (isFunction(onChangeData)) onChangeData(newData);
  };

  const handleOnSort = (from, to) => {
    const record = tableData[from];
    const newData = update(tableData, {
      $splice: [
        [from, 1],
        [to, 0, record],
      ],
    });
    setTableData(newData);
    if (isFunction(onChangeData)) onChangeData(newData);
  };

  return (
    <TableInputDisplay
      {...props}
      data={tableData}
      onAdd={handleOnAdd}
      onRemove={handleOnRemove}
      onSort={handleOnSort}
    />
  );
};

TableInput.defaultProps = TABLE_INPUT_DEFAULT_PROPS;
TableInput.propTypes = TABLE_INPUT_PROP_TYPES;

export { TableInput };