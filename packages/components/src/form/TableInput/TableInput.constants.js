import React from 'react';
import PropTypes from 'prop-types';
import { TABLE_DEFAULT_PROPS, TABLE_PROP_TYPES } from '../../informative/Table';

export const TABLE_INPUT_DEFAULT_PROPS = {
  ...TABLE_DEFAULT_PROPS,
  sortable: true,
  editable: false,
  removable: true,
  disabled: false,
  unique: false,
  error: '',
  showHeaders: true,
  forceShowInputs: false,
  resetOnAdd: false,
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
  editable: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  unique: PropTypes.bool,
  showHeaders: PropTypes.bool,
  forceShowInputs: PropTypes.bool,
  resetOnAdd: PropTypes.bool,
};
