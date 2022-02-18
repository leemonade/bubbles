import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isFunction, isEmpty, trim } from 'lodash';
import { useDebouncedValue } from '@mantine/hooks';
import { SearchIcon } from '@bubbles-ui/icons/outline';
import {
  TextInput,
  TEXT_INPUT_PROP_TYPES,
  TEXT_INPUT_DEFAULT_PROPS,
  TEXT_INPUT_SIZES,
  TEXT_INPUT_ORIENTATION,
} from '../TextInput';

export const SEARCH_INPUT_SIZES = TEXT_INPUT_SIZES;
export const SEARCH_INPUT_ORIENTATIONS = TEXT_INPUT_ORIENTATION;

export const SEARCH_INPUT_DEFAULT_PROPS = {
  ...TEXT_INPUT_DEFAULT_PROPS,
  wait: 1000,
  minChars: 1,
};
export const SEARCH_INPUT_PROP_TYPES = {
  ...TEXT_INPUT_PROP_TYPES,
  wait: PropTypes.number,
  minChars: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const SearchInput = ({ wait, minChars, value: valueProp, onChange, ...props }) => {
  const [value, setValue] = useState(valueProp);
  const [debounced] = useDebouncedValue(value, wait);

  useEffect(() => {
    if (trim(value) !== trim(valueProp)) setValue(valueProp);
  }, [valueProp]);

  useEffect(() => {
    if (isFunction(onChange) && !isEmpty(debounced) && debounced?.length >= minChars) {
      onChange(debounced);
    }
  }, [debounced]);

  return <TextInput {...props} value={value} onChange={(e) => setValue(e)} icon={<SearchIcon />} />;
};

SearchInput.defaultProps = SEARCH_INPUT_DEFAULT_PROPS;
SearchInput.propTypes = SEARCH_INPUT_PROP_TYPES;

export { SearchInput };
