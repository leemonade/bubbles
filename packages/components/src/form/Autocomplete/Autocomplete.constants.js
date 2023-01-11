import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../../layout/Box';
import { Text } from '../../typography/Text';
import {
  INPUT_WRAPPER_DEFAULT_PROPS,
  INPUT_WRAPPER_PROP_TYPES,
} from '../InputWrapper/InputWrapper.constants';

export const AUTOCOMPLETE_DEFAULT_PROPS = {
  ...INPUT_WRAPPER_DEFAULT_PROPS,
  itemComponent: forwardRef(({ value, ...others }, ref) => (
    <Box ref={ref} {...others}>
      <Text>{value}</Text>
    </Box>
  )),
  valueComponent: forwardRef(({ value, onRemove, classNames, ...others }, ref) => (
    <Box ref={ref} {...others} onClick={onRemove} style={{ cursor: 'pointer' }}>
      <Text>{value}</Text>
    </Box>
  )),
  multiple: false,
  value: null,
  placeholder: '',
  ignoreWrapper: false,
  waitToSearch: 1000,
  autoComplete: 'off',
};

export const AUTOCOMPLETE_PROP_TYPES = {
  ...INPUT_WRAPPER_PROP_TYPES,
  placeholder: PropTypes.string,
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.shape({ value: PropTypes.string.isRequired, label: PropTypes.string })
    ),
  ]).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.shape({ value: PropTypes.string.isRequired, label: PropTypes.string })
    ),
  ]),
  itemComponent: PropTypes.elementType,
  valueComponent: PropTypes.elementType,
  nothingFoundLabel: PropTypes.string,
  multiple: PropTypes.bool,
  id: PropTypes.string,
  ignoreWrapper: PropTypes.bool,
  onItemSubmit: PropTypes.func,
  onSearch: PropTypes.func,
  waitToSearch: PropTypes.number,
};
