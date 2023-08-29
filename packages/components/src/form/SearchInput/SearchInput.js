import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { trim } from 'lodash';
import { useDebouncedValue } from '@mantine/hooks';
import { SearchIcon } from '@bubbles-ui/icons/outline';
import {
  TEXT_INPUT_DEFAULT_PROPS,
  TEXT_INPUT_ORIENTATION,
  TEXT_INPUT_PROP_TYPES,
  TEXT_INPUT_SIZES,
  TextInput,
} from '../TextInput';

export const SEARCH_INPUT_SIZES = TEXT_INPUT_SIZES;
export const SEARCH_INPUT_ORIENTATIONS = TEXT_INPUT_ORIENTATION;

export const SEARCH_INPUT_DEFAULT_PROPS = {
  ...TEXT_INPUT_DEFAULT_PROPS,
  wait: 1000,
};
export const SEARCH_INPUT_PROP_TYPES = {
  ...TEXT_INPUT_PROP_TYPES,
  /** The debounce wait in milliseconds*/
  wait: PropTypes.number,
  /** The value of the input */
  value: PropTypes.string,
  /** Function called when value changes */
  onChange: PropTypes.func,
  /** Aria label for the input */
  ariaLabel: PropTypes.string,
};

const SearchInput = React.forwardRef(
  ({ wait, minChars, value: valueProp, onChange = () => {}, ariaLabel, ...props }) => {
    const [value, setValue] = useState(valueProp);
    const [debounced] = useDebouncedValue(value, wait);

    useEffect(() => {
      if (trim(value) !== trim(valueProp)) setValue(valueProp);
    }, [valueProp]);

    useEffect(() => {
      onChange(debounced);
    }, [debounced]);

    return (
      <TextInput
        {...props}
        value={value}
        onChange={(e) => setValue(e)}
        icon={<SearchIcon />}
        ariaLabel={ariaLabel}
      />
    );
  }
);

SearchInput.defaultProps = SEARCH_INPUT_DEFAULT_PROPS;
SearchInput.propTypes = SEARCH_INPUT_PROP_TYPES;

export { SearchInput };
